const express = require('express');
const User = require('../../models/User');
const router = express.Router();

router.get("/", async (req, res, next) => {
    res.render("screens/signup",{
        pageTitle: "회원가입"
    });
});

router.post("/", async(req, res, next)=> {
    const {id,nickname, password1, password2} = req.body;
    // 존재 여부 검증
    const exist = await User.exists({id: id});
    if(exist){
        return res.status(404).redirect("/signup");
    }
    // 비밀번호 일치 여부 검증
    if(password1 !== password2){
        return res.status(404).redirect("/signup");
    }
    // 새로 id 만들고 로그인 시키기
    const user = await User.create({
        id,
        nickname,
        password: password1,
    });
    console.log(user);
    req.session.user = user;
    req.session.userLoggedIn = true;
    // 로그인 상태로 만들기
    return res.redirect("/");
})

module.exports = router;