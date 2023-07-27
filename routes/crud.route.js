const express = require('express');
const {
  createBlog,
  getAllBlogs,
  updateBlogById,
  deleteBlogById,
} = require('../controllers/blog.controller');
const router = express.Router();

router.route('/').post(createBlog).get(getAllBlogs);
router.route('/:id').delete(deleteBlogById);
router.route('/:id').patch(updateBlogById);
module.exports = router;
