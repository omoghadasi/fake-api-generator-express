const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const config = require("./config");

global.config = require("./config");

mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;
mongoose
  .connect(config.dbUrl, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

//Routes
const panelAuthRoutes = require(`${config.path.routes}/panel/auth`);

app.get("/", (req, res) => {
  res.send({ message: "welcome to my api" });
});

app.use('/panel', panelAuthRoutes);

app.use((req, res, next) => {
  res.status(404).send("not found");
});

app.listen(config.port, function () {
  console.log(`App is running on port ${config.port}`);
});
