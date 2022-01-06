const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    slug: {
      type: String,
    },
    title: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    banner_active: {
      type: Boolean,
      default: false,
    },
    introduce: {
      type: String,
    },
    content: {
      type: String,
    },
    time_to_read: Number,
    category: {
      type: String,
      ref: 'category',
    },
    author: {
      type: String,
      ref: 'author',
    },
  },
  {
    collection: 'article',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports = mongoose.model('ariticle', ArticleSchema);
