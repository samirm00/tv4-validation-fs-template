"use strict";
const router = require("express").Router();
const Post = require("../models/postModel.js");

router.post("/", async (req, res) => {
  try {
    const { title, createdAt, tags, html } = req.body;

    const newPost = new Post({
      title,
      createdAt,
      tags,
      html,
    });

    // save
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const onePost = await Post.findById(req.params.id);
    res.json(onePost);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
