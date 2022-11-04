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
    const {body} = req;
    const {url} = req;
    console.log(url);
    const questionNumList = Object.keys(body);
    let questionList = Object.values(body);
    
    questionNumList.forEach(function(questionNum, i){
        console.log(questionNum, String(questionList[i]));
        eval(questionNum+`="${questionList[i]}"`);
    });

    const question = await Question.create({
        questions : body,
        questionCnt : questionNumList.length,
        owner : req.session.user._id
    });
    console.log(question);
    res.redirect("/");
})

module.exports = router;