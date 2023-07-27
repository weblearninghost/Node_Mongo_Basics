const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
  title: String,
  content: String,
  type: String,
  owner: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Blog', blogsSchema);
