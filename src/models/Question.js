const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questions: String,
    questionCnt : Number,
    owner : {type: mongoose.Schema.Types.ObjectId},
    views : {type:Number, default:0},
    results : {type:Number, default:0},
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;