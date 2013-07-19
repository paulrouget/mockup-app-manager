let gPathToNodes = new Map();

function addListener(e, path) {
  let chunks = path.split(".");
  if (chunks.length < 2)
    throw new Error("Invalid path: " + path);
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

function update(e, listen = false) {
  let attr = e.dataset.template.replace("'", "\"", "g");
  let attrObj = null;

  try {
   attrObj = JSON.parse(attr);
  } catch(e) { }

  if (!attrObj) {
    if (listen) addListener(e, attr);
    e.textContent = DB.getValue(attr);
  } else {
    if (listen && Array.isArray(attrObj.with)) {
      for (let param of attrObj.with) {
        addListener(e, param);
      }
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

let elements = document.querySelectorAll("*[data-template]");
for (let e of elements) update(e, true);
