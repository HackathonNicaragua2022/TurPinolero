const { Router } = require('express');
const { insertSpot,getLocalById,insertReview,getListLocations } = require("../controller/locales.controller");
const router = Router();

router.get("/:id",getLocalById);
// router.get("/:id/review",getReview);
router.post("/list",getListLocations);

router.post("/",insertSpot);
router.post("/:id/review",insertReview);

// router.post("/:id/package",insertPackage);

module.exports = router;    