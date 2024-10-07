const mongoose = require("mongoose");

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
    dob:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model("user", LoginUserSchema);
