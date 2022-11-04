const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const Question = require('../../models/Question');

router.get("/", async(req, res, next) => {
    const user = await (await User.findById(req.session.user._id)).populate('questions');
    console.log(user);
    res.render("screens/home",{
        pageTitle : "홈",
        questionList:user.questions,
    });
})

module.exports = router;