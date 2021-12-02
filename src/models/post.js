const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Post = model("Post", postSchema);
module.exports = Post;
