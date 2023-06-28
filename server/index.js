const Express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler");


const app = Express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routesHandler);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server started at port 4000");
});