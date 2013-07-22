let Template = {
  init: function(document, db, l10n) {
    this._db = db;
    db.on("change", (event,path) => this._dbChanged);
    this._doc = document;
    this._l10n = l10n;
    this._processTree(this._doc.body);
  },

  _dbChanged: function(event,path) {
  },

  _processNode: function(e, rootPath="") {
    let str = e.getAttribute("template");
    try {
      let json = JSON.parse(str);
      // Sanity check
      if (!("type" in json)) {
        throw new Error("missing property");
      }
      switch (json.type) {
        case "attribute": {
          if (!("name" in json) ||
              !("path" in json)) {
            throw new Error("missing property");
          }
          if (rootPath) json.path = rootPath + "." + json.path;
          e.setAttribute(json.name, this._db.get(json.path));
          break;
        }
        case "textContent": {
          if (!("path" in json)) {
            throw new Error("missing property");
          }
          if (rootPath) json.path = rootPath + "." + json.path;
          e.textContent = this._db.get(json.path);
          break;
        }
        case "localizedContent": {
          if (!("property" in json) ||
              !("paths" in json)) {
            throw new Error("missing property");
          }
          let params = json.paths.map((p) => {
            if (rootPath) p = rootPath + p;
            this._db.get(p)
          });
          e.textContent = this._l10n.get(json.property, params);
          break;
        }
      }
    } catch(exception) {
      console.error("Invalid template: " + e.outerHTML + " (" + exception + ")");
      break;
    }
  },

  _processLoop: function(e, rootPath="") {
    let str = e.getAttribute("template-loop");
    let template, count;
    try {
      let json = JSON.parse(str);
      // Sanity check
      if (!("selector" in json) ||
          !("arrayPath" in json)     ||
          !("childSelector" in json)) {
        throw new Error("missing property");
      }
      if (rootPath) {
        json.arrayPath = rootPath + "." + json.arrayPath;
      }
      let templateParent = this._doc.querySelector(json.childSelector);
      if (!templateParent) {
        throw new Error("can't find child");
      }
      template = this._doc.createElement("div");
      template.innerHTML = templateParent.textContent;
      let array = this._db.get(json.arrayPath);
      if (Array.isArray(array)) {
        throw new Errot("referenced array is not an array");
      }
      count = array.length;
    } catch(exception) {
      console.error("Invalid template: " + e.outerHTML + " (" + exception + ")");
      break;
    }
    let fragment = this._doc.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      let node = template.firstChild.cloneNode(true);
      this._processTree(node, json.arrayPath + "[" + i + "]");
    }
    e.appendChild(fragment);
  },

  _processTree: function(parent, rootPath="") {
    let loops = parent.querySelectorAll("[template-loop]");
    let nodes = parent.querySelectorAll("[template]");
    for (let e of loops) {
      this._processLoop(e);
    }
    for (let e of nodes) {
      this._processNode(e);
    }
  },
}

/* ---------

let gPathToNodes = new Map();

function addListener(e, path) {
  let chunks = path.split(".");
  for (let i = 0; i < chunks.length; i++) {
    let subPath = chunks[0];
    for (let j = 1; j <= i; j++) subPath += "." + chunks[j];
    let set = gPathToNodes.get(subPath);
    if (!set) { set = new Set(); gPathToNodes.set(subPath, set); }
    set.add(e);
  }
}

DB.on("changed", function(event, path) {
  if (gPathToNodes.has(path)) {
    for (let node of gPathToNodes.get(path)) {
      update(node);
    }
  }
});

function loop(e, listen = false) {
  let attr = e.dataset.templateLoop.replace("'", "\"", "g");
  let attr = JSON.parse(attr);
  let array = DB.getValue(attr.path);
  if (!Array.isArray(array)) {
    throw new Error("Not an array");
  }
  let tpl = document.querySelector(attr.templateSelector).textContent;
  let html = "";
  for (let o in array) {
    html += tpl;
  }
  e.innerHTML = html;
}

function update(e, listen = false) {
  let attr = e.dataset.template.replace("'", "\"", "g");
  let attrObj = null;

  try {
   attrObj = JSON.parse(attr);
  } catch(e) { }

  if (!attrObj) {
    attrObj = {
      content: attr,
    }
    e.textContent = DB.getValue(attr);
  }

  if (listen) {
    if (Array.isArray(attrObj.with)) {
      for (let param of attrObj.with) {
        addListener(e, param);
      }
    }
    if (attrObj.content) {
      addListener(e, attrObj.content);
    }
  }

  let root = null;
  if (attrObj.loop) {
    let rootElt = document.querySelector(attrObj.loop);
    root = JSON.parse(rootElt.dataset.templateLoop).path
    let idx = Array.indexOf(e.parentNode.children, e);
    attrObj.content += "[" + idx + "]";
  }
  if (attrObj.content) {
    e.textContent = DB.getValue(attrObj.content, root);
  }
  if (attrObj.l10nContent) {
    let params = [];
    if (Array.isArray(attrObj.with)) {
      params = params.concat(attrObj.with.map((p) => DB.getValue(p)))
    }
    e.textContent = l10n.get(attrObj.l10nContent, params);
  }
  if (attrObj.attributeName) {
    if (listen) addListener(e, attrObj.attributeValue);
    let value = DB.getValue(attrObj.attributeValue);
    if (value)
      e.setAttribute(attrObj.attributeName, value);
    else
      e.removeAttribute(attrObj.attributeName);
  }
}

let l10n = {
  _properties: {
    "connectedToDevice":"Connected to %1$",
    "appsSummary":"%1$ applications installed. %2$ applications running. %3$ permissions and %4$ activities listed.",
    "connectTo":"Connect to %1$:%2$",
    "deviceSize":"Device size: %1$x%2$ (%3$ DPI)",
    "batteryStatus":"Battery: %1$%",
    "IMEINumber":"IMEI: %1$",
    "phoneNumber":"Phone number: %1$",
  },
  get: function(prop, params = []) {
    let str = this._properties[prop];
    if (!str) {
      throw new Error("Can't find string " + prop);
    }
    if (params.length > 0)
      str = str.replace("%1$", params[0]);
    if (params.length > 1)
      str = str.replace("%2$", params[1]);
    if (params.length > 2)
      str = str.replace("%3$", params[2]);
    if (params.length > 3)
      str = str.replace("%4$", params[3]);
    if (params.length > 4)
      str = str.replace("%1$", params[0]);
    return str;
  },
}

let loops = document.querySelectorAll("*[data-template-loop]");
for (let e of loops) loop(e, true);

let elements = document.querySelectorAll("*[data-template]");
for (let e of elements) update(e, true);
*/
