import { Schema, model } from "mongoose";

interface Iuser{
    name: string,
    email: string,
    phone: string,
    isVerified : boolean,
    role : string,
    password: string
}

const UserSchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require : true
    },
    isVeriied: {
        type: Boolean,
        default : false
    },
    role: {
        type: String,
        default : 'admin'
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default : new Date()
    }
});

const User = model<Iuser>('User', UserSchema);

export default User;