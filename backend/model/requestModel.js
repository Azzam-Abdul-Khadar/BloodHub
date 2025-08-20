const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
    {
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        status: {
            type: String,
            enum: ["pending", "accepted", "rejected"],
            default: "pending",
        },
        quantity: {
            type: Number,
            default: 1,
        },
        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            required: true,
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("request", requestSchema)