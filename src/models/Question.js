const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questions: {type:Object, required: true},
    questionCnt : {type:Number, required: true},
    questionTitle : {type:String, required: true},
    owner : {type: mongoose.Schema.Types.ObjectId, required: true},
    views : {type:Number, default:0, required: true},
    results : {type:Number, default:0, required: true},
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;