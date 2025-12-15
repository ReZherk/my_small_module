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

module.exports = myFramework;
