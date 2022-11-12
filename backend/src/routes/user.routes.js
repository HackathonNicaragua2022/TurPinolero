const { Router } = require('express');

const user = require("../controller/user.controller.js");
const { authentication, validateLogin } = require('../middleware/user.middleware.js');

const router = Router();

router.post("/",user.create);
router.post("/signIn",validateLogin,user.signIn);
router.get("/signOut",authentication,user.signOut);
router.post("/resetPassword",authentication,user.resetPassword);


module.exports = router;