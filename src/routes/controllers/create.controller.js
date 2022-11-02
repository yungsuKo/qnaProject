var express = require("express");
var router = express.Router();


router.get("/", async(req, res, next) => {

    res.render("screens/create",{
        pageTitle : "생성하기",
    });
})

module.exports = router;