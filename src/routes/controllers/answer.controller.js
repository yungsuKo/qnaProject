const express = require('express');
const router = express.Router();
const Answer = require('../../models/Answer');
const Question = require('../../models/Question');

router.get('/:id([0-9a-f]{24})', async (req, res, next) => {
    const {id} = req.params;
    console.log(id);
    const answerList = await (await Answer.findById(id)).populate("question");
    console.log(answerList);
    const answers = Object.values(answerList.answer);
    const questions = Object.values(answerList.question.questions);

    return res.render("screens/answer",{
        pageTitle: answerList.question.questionTitle,
        answers,
        questions,
        questionCnt : answerList.question.questionCnt
    });
})

module.exports = router;