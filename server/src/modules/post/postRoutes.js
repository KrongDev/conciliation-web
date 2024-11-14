const express = require('express');
const postService = require('./application/PostService');
const router = express.Router();

const baseUrl = '/post';

// 생성
router.post(baseUrl, async (req, res) => {
    const { title, content } = req.body;
    const post = await postService.createPost(title, content);
    res.status(201).json(post);
});

router.get(baseUrl + "/:id", async (req, res) => {
    const { id } = req.params;
    const post = await postService.findPost(id);
    res.status(200).json(post);
})

router.get(baseUrl + "s/:searchValue", async (req, res) => {
    const { searchValue } = req.params;
    const postList = await postService.findPostList(searchValue);
    res.status(200).json(postList);
})

module.exports = router;

