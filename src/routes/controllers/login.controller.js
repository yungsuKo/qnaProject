const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../../models/User");

router.get("/",async (req, res, next) => {
    res.render("screens/login",{
        pageTitle: "로그인"
    });
});

router.post("/", async (req, res, next) => {
    const {id, password} = req.body;
    const user = await User.findOne({id});
    if(!user){
        return res.redirect("/login");    
    };
    const compare = await bcrypt.compare(password,user.password);
    if(!compare){
        return res.redirect("/login");    
    }
    
    req.session.user = user;
    req.session.userLoggedIn = true;
    return res.redirect("/");
});

module.exports = router;