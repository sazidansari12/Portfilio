const router = require("express").Router();

const {userData,getUserData} = require("../controllers/UserData")

router.post("/contactDetails",userData);
router.get("/getUserData",getUserData)


module.exports = router;