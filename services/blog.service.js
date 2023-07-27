const blogModel = require('../db-models/blogs');

exports.createBlog = async (data) => {
  const result = await blogModel.create(data);
  return result;
};

exports.getAllBlogs = async () => {
  const blogs = await blogModel.find();
  return blogs;
};

exports.deleteBlogById = async (id) => {
  const data = await blogModel.deleteOne({ _id: id });
  return data;
};

exports.updateBlogById = async (id, blogData) => {
  const result = await blogModel.findByIdAndUpdate(id, blogData);
  return result;
};
