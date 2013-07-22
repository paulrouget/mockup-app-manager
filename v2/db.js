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

  _getParentAndKey: function(path) {
    path = path.replace("[", ".[", "g");
    let chunks = path.split(".");
    chunks = chunks.map((c) => {
      if (c[0] != "[") return c;
      return parseInt(c.substr(1));
    });
    let parent = this._db;
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

  set: function(path, value) {
    let {parent, key} = this._getParentAndKey(path);
    parent[key] = this._copyObject(value);
    this.emit("changed", path);
  },

  get: function(path) {
    let {parent, key} = this._getParentAndKey(path);
    return this._copyObject(parent[key]);
  }
};

EventEmitter.decorate(DB);
