const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
  },
  { timestamps: { createdAt: 'createDate', updatedAt: 'updateDate' } }
);

module.exports = mongoose.model('Character', characterSchema);
