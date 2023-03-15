const express = require('express');

const {
  getAllBlogPosts,
  addBlogPost,
  getSinglePost,
  updateSingleBlogPost,
  removeSingleBlogPost,
  likeBlogPost,
  DownBlogPost
} = require("../controllers/blogPosts.controller")

const router = express.Router();

router.get("/", getAllBlogPosts);
router.post("/", addBlogPost);
router.get("/:id", getSinglePost);
router.patch("/:id", updateSingleBlogPost);
router.delete("/:id", removeSingleBlogPost);
router.patch("/:id/likedBlogPost", likeBlogPost);
router.patch("/:id/DownBlogPost", DownBlogPost);


module.exports = router;
