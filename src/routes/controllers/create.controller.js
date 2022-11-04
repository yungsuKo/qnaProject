const express = require("express");
const router = express.Router();
const Question = require("../../models/Question");
const User = require("../../models/User")


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
    const user = await User.findById(req.session.user._id);
    console.log(user);
    let questionTitle;
    // url 짜르고 스트링 값을 객체로 저장할 수 있는 방법이 필요함
    let parsedUrl = url.replace("/?","");
    parsedUrl = parsedUrl.split("&");
    parsedUrl.forEach(function(elem){
        if(elem.includes("questionTitle")){
            questionTitle = elem.split("=")[1];
        }
    })
    let questionNumList = Object.keys(body);
    let questionList = Object.values(body);
    
    questionNumList.forEach(function(questionNum, i){
        console.log(questionNum, String(questionList[i]));
        eval(questionNum+`="${questionList[i]}"`);
    });

    const question = await Question.create({
        questions : body,
        questionCnt : questionNumList.length,
        questionTitle,
        owner : req.session.user._id
    });
    
    user.questions.push(question._id);
    user.save();
    
    res.redirect("/");
})

module.exports = router;