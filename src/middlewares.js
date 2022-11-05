/** 로그인 되어있지 않은 유저들만 사용할 수 있는 기능 */
const publicAccessMiddleware = (req, res, next) => {
    if(req.session.userLoggedIn){
        return res.redirect("/");
    }
    return next();
}

/** 로그인 되어있는 유저만 사용할 수 있는 기능 */
const privateAccessMiddleware = (req, res, next) => {
    //로그인이 되어 있으면 넘기고, 되어 있지 않으면 로그인 페이지로 보낸다.
    if(!req.session.userLoggedIn){
        return res.redirect("/login");
    }
    return next();
}

module.exports = {publicAccessMiddleware, privateAccessMiddleware};