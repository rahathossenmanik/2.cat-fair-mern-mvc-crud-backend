const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const characterSchema = new mongoose.Schema(
  {
    label: { type: String, required: true }
  },
  { timestamps: { createdAt: 'createDate', updatedAt: 'updateDate' } }
);

module.exports = mongoose.model('Character', characterSchema);
