const express = require("express");

const { validation, controllerWrapper } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/register", validation(), controllerWrapper(ctrl.register));

module.exports = router;
