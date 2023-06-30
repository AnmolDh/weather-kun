const Express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler");


const app = Express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routesHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server started!!");
});