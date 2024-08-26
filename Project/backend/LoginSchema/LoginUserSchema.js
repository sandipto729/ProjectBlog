import mongoose from "mongoose";

const LoginUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    markssheet:{
        type: String,
        required: true
    }
});

export default mongoose.model("user_logins", LoginUserSchema);
