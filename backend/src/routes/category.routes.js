const { Router } = require('express');
const { createCategory,categories,getCategory,updateCategory,deleteCategory,insertWithSp } = require("../controller/category.controller.js");
const router = Router();

router.get("/",categories);
router.get("/:id",getCategory);
router.post("/",createCategory);
router.put("/:id",updateCategory);
router.delete("/:id",deleteCategory);
router.post("/insertWithSp",insertWithSp);

module.exports = router;