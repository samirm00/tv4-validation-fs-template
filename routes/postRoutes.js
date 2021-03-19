"use strict";
const router = require("express").Router();
const Post = require("../models/postModel.js");

router.post("/", async (req, res) => {
  const { title, createdAt, tags, html } = req.body;

  const newPost = new Post({
    title,
    createdAt,
    tags,
    html,
  });
  try {
    // save
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  const allPosts = await Post.find();
  res.json(allPosts);
});

router.get("/:id", async (req, res) => {
  const onePost = await Post.findById(req.params.id);
  res.json(onePost);
});

module.exports = router;
