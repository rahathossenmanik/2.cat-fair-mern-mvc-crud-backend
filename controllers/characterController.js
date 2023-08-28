const CharacterSchema = require('../models/CharacterSchema');

exports.list = async (req, res) => {
  try {
    const data = await CharacterSchema.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An Error Occurred' });
  }
};

exports.details = async (req, res) => {
  try {
    const data = await CharacterSchema.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An Error Occurred' });
  }
};

exports.create = async (req, res) => {
  const newData = new CharacterSchema(req.body);
  try {
    const data = await newData.save();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An Error Occurred' });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await CharacterSchema.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An Error Occurred' });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await CharacterSchema.findByIdAndRemove(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An Error Occurred' });
  }
};
