var express = require("express");
var router = express.Router();


router.get("/", async(req, res, next) => {
    const {questionCount,questionTitle} = req.query;
    console.log(questionCount,questionTitle);
    res.render("screens/create",{
        pageTitle : "생성하기",
        questionCount,
        questionTitle
    });
})

router.post("/",(req, res, next)=>{
    
})

module.exports = router;