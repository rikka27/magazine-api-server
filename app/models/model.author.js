const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
    },
    avatar: String,
  },
  {
    collection: 'author',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports = mongoose.model('author', AuthorSchema);
