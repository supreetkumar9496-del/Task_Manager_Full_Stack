import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        lowercase: true,
        trim:true,
        
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        trim:true,
    },
    password:{
        type: String,
        lowercase: true,
        trim:true,
        required: [true, "Password is must"],
    },
    refreshToken:{
        type: String,

    },
},
{
    timestamps: true,
}
);

// Hashing and Ecryption
userSchema.pre("save", async function (next){
    if (!this.isModified("password")) return next();
    await bcrypt.hash(this.password, 10)
    next();

});

userSchema.methods.isPassCorrect = async function (pass){
   return await bcrypt.compare(pass, this.password);

}



userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_SECRET_TOKEN,
        {
            expiresIn: process.env.ACCESS_Token_EXP,
        }
    );

};

userSchema.methods.generateRefreshToken = function (){
    return jwt.sign(
        {
            _id: this._id,
            
        },
         process.env.REFRESH_SECRET_TOKEN,
        {
            expiresIn: process.env.REFRESH_Token_EXP,
        }

    );
};

export const User = mongoose.model("User", userSchema);