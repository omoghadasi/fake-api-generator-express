const config = require("../config")

const User = require(`${config.path.models}/user`)

module.exports = class Controller {
   constructor() {
      this.model = { User }
   }
}