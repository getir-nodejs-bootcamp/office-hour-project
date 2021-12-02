const mongoose = require("mongoose");
const Post = require("../models/post");
const { post } = require("../routes/post");

const getPost = async (req, res) => {
    const { id } = req.body;

    try {
        const post = await Post.findById(id);
        res.json(post);
    } catch (error) {
        res.error("Can not found!");
    }
};

const deletePost = async (req, res) => {
    const { id } = req.body;

    try {
        const post = await Post.remove({
            _id: id,
        });
        res.json(post);
    } catch (error) {
        res.error("Can not found!");
    }
};

const createPost = async (req, res) => {
    const { content, title } = req.body;
    const newPost = new Post({
        title,
        content,
    });
    try {
        await newPost.save();
    } catch (error) {
        console.log(error);
    }
    res.send("succes");
};

const patchPost = async (req, res) => {
    const { id, content, title } = req.body;
    const postObj = await Post.findById(id);

    try {
        const post = await Post.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                    title: title ?? postObj.title,
                    content: content ?? postObj.content,
                },
            }
        );
        res.json(post);
    } catch (error) {
        res.error("Can not found!");
    }
};

module.exports = {
    getPost,
    createPost,
    deletePost,
    patchPost,
};
