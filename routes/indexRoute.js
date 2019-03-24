const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const { catchErrors } = require("../handlers/errorHandler");

router.get("/", catchErrors(indexController.index));

router.get("/assistance", indexController.inputAss);
router.post("/assistance", catchErrors(indexController.createAss));

router.get("/schedule", catchErrors(indexController.inputSch));
router.post("/schedule", catchErrors(indexController.createSch));

router.post("/schedule/:id/delete", catchErrors(indexController.deleteSch));

module.exports = router;
