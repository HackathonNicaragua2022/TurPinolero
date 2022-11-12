const { Router } = require('express');
const { Package, getPackage, createPackage, updatePackage, deletePackage } = require('../controller/package');
const { createPackage,Package,getPackage,updatePackage,deletePackage,insertWithSp } = require("../controller/package.controller.js");
const router = Router();



router.get("/",Package);
router.get("/:id",getPackage);
router.post("/",createPackage);
router.put("/:id",updatePackage);
router.delete("/:id",deletePackage);
router.post("/insertWithSp",insertWithSp);

module.exports = router;