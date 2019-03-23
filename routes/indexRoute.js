const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const { catchErrors } = require("../handlers/errorHandler");

router.get("/", catchErrors(indexController.createAssistance));

module.exports = router;
