import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            minlength: 6,
        },

        githubId: {
            type: String,
            unique: true,
            sparse: true,
        },

        avatar: {
            type: String,
        },

        authProvider: {
            type: String,
            enum: ["local", "github"],
            default: "local",
        },

        resetPasswordToken: {
            type: String,
        },

        resetPasswordExpires: {
            type: Date,
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;