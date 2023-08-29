const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    petType: { type: ObjectId, ref: 'PetType', required: true },
    character: { type: ObjectId, ref: 'Character', required: true },
    about: { type: String, required: true },
    favorite: { type: String, required: true },
    image: { type: String, required: true },
    loveCount: Number
  },
  { timestamps: { createdAt: 'createDate', updatedAt: 'updateDate' } }
);

module.exports = mongoose.model('Pet', petSchema);
