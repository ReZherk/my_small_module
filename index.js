const myFramework = require("./myModule/myFramework");

const app = myFramework({ name: "DemoApp" });

app.start();

console.log(myFramework.version);
console.log(myFramework.author);

const jsonMiddleware = myFramework.json();

jsonMiddleware({}, {}, () => console.log("next ejecucion"));

const router = myFramework.Router();

router.get("/users", () => {});
router.get("/products", () => {});

console.log(router.listRoutes());

const logger = myFramework.logger();

logger.info("Servidor iniciado");
logger.error("Error de conexión");

console.log(logger.getLogs());
