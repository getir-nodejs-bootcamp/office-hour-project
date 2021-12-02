const express = require("express");
const { postController } = require("../controllers/index.js");
const router = express.Router();

router.get("/post", postController.getPost);
router.post("/post", postController.createPost);
router.delete("/post", postController.deletePost);
router.patch("/post", postController.patchPost);

module.exports = router;
