const path = require("path");
module.exports = {
  port: 3000,
  dbUrl: "mongodb://localhost:27017/fakeapigenerator",
  path: {
    controllers: path.resolve("./controllers"),
    models: path.resolve("./models"),
    routes: path.resolve("./routes"),
    views: path.resolve("./views"),
  },
};
