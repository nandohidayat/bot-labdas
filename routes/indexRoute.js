const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const { catchErrors } = require("../handlers/errorHandler");

router.get("/", catchErrors(indexController.index));

router.get("/assistance", indexController.inputAss);
router.post("/assistance", catchErrors(indexController.createAss));

router.post("/schedule", catchErrors(indexController.createSch));
router.get("/schedule/:id", catchErrors(indexController.getSch));
router.post("/schedule/:id", catchErrors(indexController.updateSch));
router.post("/schedule/:id/delete", catchErrors(indexController.deleteSch));

module.exports = router;
