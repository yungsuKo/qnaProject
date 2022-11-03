var express = require("express");
var router = express.Router();
var Question = require("../../models/Question");


router.get("/", async(req, res, next) => {
    const {questionCount,questionTitle} = req.query;
    console.log(questionCount,questionTitle);
    res.render("screens/create",{
        pageTitle : "생성하기",
        questionCount,
        questionTitle
    });
})

router.post("/", async (req, res, next)=>{
    const {questionCount,questionTitle} = req.query;
    const question = await Question.create({
        questionCount
    });
    console.log(question);
    res.redirect("/");
})

module.exports = router;