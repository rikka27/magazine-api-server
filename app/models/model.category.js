const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
    },
  },
  {
    collection: 'category',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

module.exports = mongoose.model('category', CategorySchema);
