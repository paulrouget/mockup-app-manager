let DB = {
  _db: fakeDB,

  _copyObject: function(obj) {
    if (typeof obj == "object") {
      try {
        return JSON.parse(JSON.stringify(obj));
      } catch(e) {
        throw new Error("Invalid value: " + obj);
      }
    }
    if (typeof obj == "function") {
      throw new Error("Invalid value: " + obj);
    }
    return obj;
  },

  _getParentAndKey: function(path, root) {
    path.replace("[", ".[", "g");
    let chunks = path.split(".");
    chunks = chunks.map((c) => {
      if (c[0] != "[") return c;
      return parseInt(c.substr(1));
    });
    let parent = root;
    for (let i = 0; i < chunks.length; i++) {
      let key = chunks[i];
      if (i == (chunks.length - 1)) {
        return {parent:parent, key:key};
      } else {
        if (key in parent) {
          parent = parent[key];
        } else {
          throw new Error("Can't resolve path: " + path);
        }
      }
    }
  },

  setValue: function(path, value, root) {
    if (!root) root = this._db;
    let {parent, key} = this._getParentAndKey(path, root);
    parent[key] = this._copyObject(value);
    this.emit("changed", path);
  },

  getValue: function(path, root) {
    if (!root) root = this._db;
    let {parent, key} = this._getParentAndKey(path, root);
    return this._copyObject(parent[key]);
  }
};

EventEmitter.decorate(DB);
DB.setValue("client.apps.all", webapps.all);
