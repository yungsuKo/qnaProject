const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');

router.get("/:id", async(req, res, next)=>{
    const {id} = req.params;
    let questions = await (await Question.findById(id)).populate("owner");
    // console.log(questions.owner.id);
    questions = Object.values(questions.questions);
    const {owner} = questions;
    return res.render("screens/question",{
        pageTitle: "질문페이지",
        questions,
        owner,
    });
})

router.post("/:id", async(req, res, next) => {
    return res.render("screens/question",{})
})

module.exports = router;