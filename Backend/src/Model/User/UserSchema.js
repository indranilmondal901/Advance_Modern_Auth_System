const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required\n"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required\n"]
    },
    password: {
        type: String,
        required: [true, "Password is required\n"]
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user",
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;