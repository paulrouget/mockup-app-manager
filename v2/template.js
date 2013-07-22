let Template = {
  init: function(document, db, l10n) {
    this._db = db;
    db.on("changed", (event,path) => this._dbChanged(event,path));
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
        this._processNode(elt);
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

  _processNode: function(e, rootPath="") {
    let str = e.getAttribute("template");
    if (rootPath)
      rootPath = rootPath + ".";
    try {
      let json = JSON.parse(str);
      // Sanity check
      if (!("type" in json)) {
        throw new Error("missing property");
      }
      if (json.rootPath)
        rootPath = json.rootPath;
      let paths = [];
      switch (json.type) {
        case "attribute": {
          if (!("name" in json) ||
              !("path" in json)) {
            throw new Error("missing property");
          }
          e.setAttribute(json.name, this._db.get(rootPath + json.path));
          paths.push(rootPath + json.path);
          break;
        }
        case "textContent": {
          if (!("path" in json)) {
            throw new Error("missing property");
          }
          e.textContent = this._db.get(rootPath + json.path);
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
            return this._db.get(rootPath + p);
          });
          e.textContent = this._l10n.get(json.property, params);
          break;
        }
      }
      if (rootPath)
        json.rootPath = rootPath;
      e.setAttribute("template", JSON.stringify(json));
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
