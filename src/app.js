require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,{});
const db = mongoose.connection;

app.use(express.urlencoded({ extends: true }));
app.use(express.text());
app.use(express.json());
app.use(session({
    secret: 'asdf',
    resave: true,
    saveUninitialized: false,
    store : MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    })
}));
app.use("/assets", express.static("assets"));
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(function (req, res, next){
    res.locals.userLoggedIn = req.session.userLoggedIn;
    res.locals.user = req.session.user || {};
    next();
});

app.use("/", require("./routes/controllers/home.controller"));
app.use("/create", require("./routes/controllers/create.controller"));
app.use("/login", require("./routes/controllers/login.controller"));
app.use("/logout", require("./routes/controllers/logout.controller"));
app.use("/signup", require("./routes/controllers/signup.controller"));

db.once('open',function(){
    console.log("mongodb connected");
});
app.listen(4000, () => {
    console.log("시작됨");
})