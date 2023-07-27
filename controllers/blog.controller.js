const { json } = require('express');
const blogService = require('../services/blog.service');

exports.createBlog = async (req, res) => {
  try {
    console.log(req.body);
    const result = await blogService.createBlog(req.body);
    res.json({ data: result, status: 'success' });
  } catch (err) {
    console.log(`Error in API:${req.url}`, err);
    res.status(500).json({ error: err.message });
  }
};
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json({ data: blogs, status: 'success' });
  } catch (err) {
    console.log(`Error in API:${req.url}`, err);
    res.status(500).json({ error: err.message });
  }
};
exports.deleteBlogById = async (req, res) => {
  try {
    const data = await blogService.deleteBlogById(req.params.id);
    res.json({ data, status: 'success' });
  } catch (err) {
    console.log(`Error in API:${req.url}`, err);
    res.status(500).json({ success: false, error: err.message });
  }
};
exports.updateBlogById = async (req, res) => {
  try {
    const result = await blogService.updateBlogById(req.params.id, req.body);
    res.json({ data: result, success: true });
  } catch (err) {
    console.log(`Error in API:${req.url}:`, err.message);
    res.status(500);
    json({ error: err.message, success: false });
  }
};
