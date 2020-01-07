const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
const config = require("./config/index");

db = mongoose.connect("mongodb://18.190.14.5:1000/payment", {
  useNewUrlParser: true
});

// middleware
app.use(morgan("dev"));
app.use(
  bodyParser.json({
    limit: "200mb"
  })
);
//start
app.get("/", (req, res, next) => {
  res.send({
    status: 200,
    message: "Hello World"
  });
});
// CORS Headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE,");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Routes
const route = require("./routes/payment.route");
app.use("/payment", route);

app.listen(config["port"], () => {
  console.log(`Server listening on port: ${config["port"]}`);
});
