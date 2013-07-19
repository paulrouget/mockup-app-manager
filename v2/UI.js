let _timeout = null;

let UI = {
  setTab: function(name) {
    var tab = document.querySelector(".tab.selected");
    var panel = document.querySelector(".tabpanel.selected");

    if (tab) tab.classList.remove("selected");
    if (panel) panel.classList.remove("selected");

    var tab = document.querySelector(".tab." + name);
    var panel = document.querySelector(".tabpanel." + name);

    if (tab) tab.classList.add("selected");
    if (panel) panel.classList.add("selected");
  },

  toggleDeviceInspector: function() {
    document.body.classList.toggle("expanded");
  },

  disconnect: function() {
    clearTimeout(_timeout);
    DB.setValue("client.connection.status", "disconnected");
  },

  connect: function() {
    DB.setValue("client.connection.status", "connecting");
    _timeout = setTimeout(() => {
      DB.setValue("client.connection.status", "connected");
    }, 1500);
  },

  editConnectionParameters: function() {
    this.disconnect();
    DB.setValue("client.connection.status", "editing");
  },

  saveConnectionInfo: function() {
    let ip = document.querySelector("input.ip").value;
    let port = Math.abs(document.querySelector("input.port").value);
    if (!!port) {
      DB.setValue("client.connection.port", port);
    }
    DB.setValue("client.connection.ip", ip);
    this.disconnect();
  },
}

UI.setTab("permissions");

