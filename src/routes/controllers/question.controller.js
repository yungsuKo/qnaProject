const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');
const Answer = require('../../models/Answer')

const timestamp = () => {
    let date= new Date;
    date.setHours(date.getHours()+9);
    date = date.toISOString();
    return date;
}

router.get("/:id([0-9a-f]{24})", async(req, res, next)=>{
    try{
        const {id} = req.params;
        console.log(id);
        const questions = await (await (await Question.findById(id)).populate("owner")).populate("answers");
        const questionList = Object.values(questions.questions);
        questions.views += 1;
        questions.save();
        // 이미지 관련된 정보를 못불러와서 retry를 하는 건가..
        // 만약 그렇다면 retry를 하지 못하도록 세팅해야함..
        return res.status(200).render("screens/question",{
            pageTitle: "질문페이지",
            questionList,
            questions,
            answers: questions.answers
        });
    }catch(e){
        console.log(e);
    }
})

router.post("/:id([0-9a-f]{24})", async(req, res, next) => {
    const {
        body,
        params:{id}
    } = req;
    console.log(id, body);
    const question = await Question.findById(id);
    const answer = await Answer.create({
        answer : body,
        owner : req.session.user._id,
        question : id,
        createTime : timestamp()
    });
    question.answers.push(answer._id);
    question.save();

    return res.redirect(`/answer/${answer._id}`);
})


router.get("/:id([0-9a-f]{24})/edit", async(req, res, next) => {
    const {id} = req.params;
    const question = await Question.findById(id);
    const questionList = Object.values(question.questions);
    console.log(question);
    return res.render("screens/questionEdit",{
        questionList
    })
})

router.post("/:id([0-9a-f]{24})/edit", async(req, res, next) => {
    const {
        body,
        params: {id}
    } = req;
    const question = await Question.findByIdAndUpdate(id, {
        questions: body
    });

    console.log(question);
    return res.redirect(`/question/${id}`);
})

module.exports = router;