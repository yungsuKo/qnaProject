const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    answer: {type:Object, required: true},
    owner : {type: mongoose.Schema.Types.ObjectId, ref:'User' ,required: true},
    question : {type: mongoose.Schema.Types.ObjectId, ref:'Question'},
    createTime : {type : Date}
});

const Answer = mongoose.model("Answer", answerSchema);
module.exports = Answer;