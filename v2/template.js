let Template = {
  init: function(document, db, l10n) {
    this._db = db;
    db.on("changed", (event,path) => {this._dbChanged(event,path)});
    this._doc = document;
    this._l10n = l10n;
    this._nodeListeners = new Map();
    this._loopListeners = new Map();
    this._processTree(this._doc.body);
  },

  _dbChanged: function(event, path) {
    // Loops:
    let set = this._loopListeners.get(path);
    if (set) {
      for (let [registeredPath, set] of this._nodeListeners) {
        if (registeredPath.indexOf(path) > -1) {
          this._nodeListeners.delete(registeredPath);
        }
      }
      for (let elt of set) {
        this._processLoop(elt);
      }
    }

    // Nodes:
    set = this._nodeListeners.get(path);
    if (set) {
      for (let elt of set) {
        this._processNode(elt, null, path);
      }
    }
  },

  _registerNode: function(path, element) {
    if (!this._nodeListeners.has(path)) {
      this._nodeListeners.set(path, new Set());
    }
    let set = this._nodeListeners.get(path);
    set.add(element);
  },

  _registerLoop: function(path, element) {
    if (!this._loopListeners.has(path)) {
      this._loopListeners.set(path, new Set());
    }
    let set = this._loopListeners.get(path);
    set.add(element);
  },

  _processNode: function(e, rootPath="", cachedPath=null) {
    let str = e.getAttribute("template");
    if (rootPath) rootPath = rootPath + ".";
    try {
      let json = JSON.parse(str);
      // Sanity check
      if (!("type" in json)) {
        throw new Error("missing property");
      }
      let paths = [];
      switch (json.type) {
        case "attribute": {
          if (!("name" in json) ||
              !("path" in json)) {
            throw new Error("missing property");
          }
          e.setAttribute(json.name, this._db.get(cachedPath || (rootPath + json.path)));
          paths.push(rootPath + json.path);
          break;
        }
        case "textContent": {
          if (!("path" in json)) {
            throw new Error("missing property");
          }
          e.textContent = this._db.get(cachedPath || (rootPath + json.path));
          paths.push(rootPath + json.path);
          break;
        }
        case "localizedContent": {
          if (!("property" in json) ||
              !("paths" in json)) {
            throw new Error("missing property");
          }
          let params = json.paths.map((p) => {
            paths.push(rootPath + p);
            return this._db.get(cachedPath || (rootPath + p))
          });
          e.textContent = this._l10n.get(json.property, params);
          break;
        }
      }
      if (paths.length > 0) {
        for (let path of paths) {
          this._registerNode(path, e);
        }
      }
    } catch(exception) {
      console.error("Invalid template: " + e.outerHTML + " (" + exception + ")");
    }
  },

  _processLoop: function(e, rootPath="") {
    try {
      let template, count;
      let str = e.getAttribute("template-loop");
      let json = JSON.parse(str);
      if (!("arrayPath" in json)     ||
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
      template = template.firstElementChild;
      let array = this._db.get(json.arrayPath);
      if (!Array.isArray(array)) {
        throw new Error("referenced array is not an array");
      }
      count = array.length;

      let fragment = this._doc.createDocumentFragment();
      for (let i = 0; i < count; i++) {
        let node = template.cloneNode(true);
        this._processTree(node, json.arrayPath + "[" + i + "]");
        fragment.appendChild(node);
      }
      this._registerLoop(json.arrayPath, e);
      e.innerHTML = "";
      e.appendChild(fragment);
    } catch(exception) {
      console.error("Invalid template: " + e.outerHTML + " (" + exception + ")");
    }
  },

  _processTree: function(parent, rootPath="") {
    let loops = parent.querySelectorAll("[template-loop]");
    let nodes = parent.querySelectorAll("[template]");
    for (let e of loops) {
      this._processLoop(e, rootPath);
    }
    for (let e of nodes) {
      this._processNode(e, rootPath);
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

let loops = document.querySelectorAll("*[data-template-loop]");
for (let e of loops) loop(e, true);

let elements = document.querySelectorAll("*[data-template]");
for (let e of elements) update(e, true);
*/
