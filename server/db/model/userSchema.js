const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    // tokens:[
    //     {
    //         token:{
    //             type:String,
    //             required:true
    //         }
    //     }
    // ]


    // token:{
    //     type:String,
    //     required:true
    // }
    token: {
        type: String
    },

    // New profile Structure
    Profile: [{
        isProfileComplete: { type: Boolean, required: true },
        profileData: [{
            fullName: { type: String },
            image: { type: String },
            description: { type: String },
            occupation: { type: Array }
        }]
    }]



});


//Password
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {

        this.password = await bcrypt.hash(this.password, 12);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, 12);
    }
    next();
});


// Token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        //    this.tokens = this.tokens.concat({token:token});
        this.token = (token);
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}



const User = mongoose.model('registration', userSchema);

module.exports = User;
