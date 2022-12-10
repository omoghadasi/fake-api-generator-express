const express = require("express");
const config = require("../../config");
const router = express.Router();

const AuthController = require(`${config.path.controllers}/AuthController`);

router.get("/login", AuthController.login.bind(AuthController));
router.get("/register", AuthController.registerView.bind(AuthController));
router.post("/register", AuthController.register.bind(AuthController));
router.get("/email-availability/:email", AuthController.emailAvailability.bind(AuthController));


module.exports = router;