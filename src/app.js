const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/qnaproject",{});
const db = mongoose.connection;

app.use("/assets", express.static("assets"));
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use("/", require("./routes/controllers/home.controller"));
app.use("/create", require("./routes/controllers/create.controller"));
// app.use("/result", require("./routes/controllers/result.controller"));

db.once('open',function(){
    console.log("mongodb connected");
});
app.listen(4000, () => {
    console.log("시작됨");
})