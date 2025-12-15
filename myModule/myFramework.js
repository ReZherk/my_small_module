function myFramework(config = {}) {
  return {
    name: config.name || "MyFramework",
    start() {
      console.log("${this.name} iniciado");
    },
  };
}

myFramework.version = "1.0.0";
myFramework.author = "ReZherk";

myFramework.json = function () {
  return function jsonMiddleware(req, res, next) {
    console.log("JSON middleware ejecutado");
    next && next();
  };
};

myFramework.Router = function () {
  const routes = [];

  return {
    get(path, handler) {
      routes.push({ method: "GET", path, handler });
    },
    listRoutes() {
      return routes;
    },
  };
};

myFramework.logger = function () {
  const logs = [];

  function saveLog(type, message) {
    const entry = {
      type,
      message,
      date: new Date().toISOString(),
    };
    logs.push(entry);
  }

  return {
    info(message) {
      saveLog("INFO", message);
      console.log("[INFO]", message);
    },

    error(message) {
      saveLog("ERROR", message);
      console.error("[ERROR]", message);
    },

    getLogs() {
      return logs;
    },
  };
};

module.exports = myFramework;
