const express = require("express");
const config = require("../config");
const router = express.Router();

const AuthController = require(`${config.path.controllers}/AuthController`);

router.get("/login", AuthController.login);
router.get("/register", AuthController.registerView);


module.exports=router;