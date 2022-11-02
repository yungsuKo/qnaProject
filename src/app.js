const express = require("express");
const path = require("path");
const app = express();

app.use("/assets", express.static("assets"));
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use("/", require("./routes/controllers/home.controller"));
app.use("/create", require("./routes/controllers/create.controller"));
// app.use("/result", require("./routes/controllers/result.controller"));

app.listen(4000, () => {
    console.log("시작됨");
})