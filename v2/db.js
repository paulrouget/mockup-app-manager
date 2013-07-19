let DB = {
  _db: fakeDB,

  _copyObject: function(obj) {
    if (typeof obj == "object") {
      try {
        return JSON.parse(JSON.stringify(value));
      } catch(e) {
        throw new Error("Invalid value: " + value);
      }
    }
    if (typeof obj == "function") {
      throw new Error("Invalid value: " + value);
    }
    return obj;
  },

  _ensurePathSyntaxIsValid: function(path) {
    if (path.split(".").length < 2) {
      throw new Error("Invalid path syntax: " + path);
    }
  },

  _getParentAndKey: function(path) {
    let chunks = path.split(".");
    let parent = this._db;
    for (let i = 0; i < chunks.length; i++) {
      let key = chunks[i];
      if (key in parent) {
        if (i == (chunks.length - 1)) {
          return {parent:parent, key:key};
        } else {
          parent = parent[key];
        }
      } else {
        throw new Error("Can't resolve path: " + path);
      }
    }
  },

  setValue: function(path, value) {
    this._ensurePathSyntaxIsValid(path);
    let {parent, key} = this._getParentAndKey(path);
    parent[key] = this._copyObject(value);
    this.emit("changed", path);
  },

  getValue: function(path) {
    this._ensurePathSyntaxIsValid(path);
    let {parent, key} = this._getParentAndKey(path);
    return this._copyObject(parent[key]);
  }
};

EventEmitter.decorate(DB);
