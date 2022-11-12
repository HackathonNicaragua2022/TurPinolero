const { Router } = require('express');
const router = Router();

router.use("/user",require("./user.routes"));
router.use("/categories",require("./category.routes"));
router.use("/location",require("./locales.routes"));

module.exports= router;