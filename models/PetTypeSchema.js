const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const petTypeSchema = new mongoose.Schema(
  {
    label: { type: String, required: true }
  },
  { timestamps: { createdAt: 'createDate', updatedAt: 'updateDate' } }
);

module.exports = mongoose.model('PetType', petTypeSchema);
