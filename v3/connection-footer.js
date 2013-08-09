let UI = {
  disconnect: function() {
    document.querySelector("#connection-footer").setAttribute("status", "disconnected");
  },
  connect: function() {
    document.querySelector("#connection-footer").setAttribute("status", "connected");
  },
}
if (window.location.hash == "#connected") {
  UI.connect();
}

