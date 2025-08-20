const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fName: {
            type: String,
            required: true,
        },
        lName: {
            type: String,
        },
        userType: {
            type: String,
            enum: ["user", "hospital"],
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        contact: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
        },

        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        },
        password: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("user", userSchema);