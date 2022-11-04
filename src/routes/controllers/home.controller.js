const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const Question = require('../../models/Question');

router.get("/", async(req, res, next) => {
    let user;
    if(req.session.user){
       user = await (await User.findById(req.session.user._id)).populate('questions');
    }
    
    res.render("screens/home",{
        pageTitle : "홈",
        questionList:user,
    });
})

module.exports = router;