const { socketIO } = require("./socketClient");

var socket = socketIO;

class eventHandler {
  // making socket connection
  constructor() {
    socket.on("connect", () => {
      console.log("Socket has been connected"); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("disconnect", () => {
      console.log("Socket has been disconnected"); // undefined
    });

    socket.on("connect_error", () => {
      setTimeout(() => {
        console.log("Socket Disconnected reconnecting");
        socket.connect();
      }, 1000);
    });
  }

  registerHandler(onMessageReceived) {
    socket.on("message", onMessageReceived);
  }

  unregisterHandler() {
    socket.off("message");
  }

  emitChanges(data) {
    socket.emit("changes", data);
  }

  join(chatroomName, cb) {
    socket.emit(chatroomName, cb);
  }

  leave(chatroomName, cb) {
    socket.emit("leave", chatroomName, cb);
  }
}

export default eventHandler;
