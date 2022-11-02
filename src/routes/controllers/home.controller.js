var express = require("express");
var router = express.Router();


router.get("/", async(req, res, next) => {

    res.render("screens/home",{
        pageTitle : "홈",
    });
})

module.exports = router;