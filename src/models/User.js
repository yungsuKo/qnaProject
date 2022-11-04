const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    id: {type: String, required:true},
    nickname: {type: String, required:true},
    password:{type: String, required:true},
    questions : [{type: mongoose.Schema.Types.ObjectId, ref:'Question'}]
})

userSchema.pre("save", async function(){
    if (this.isModified(this.password) || this.isNew){
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;