const petTypeSchema = require('../models/PetTypeSchema');

exports.list = async (req, res) => {
  try {
    const data = await petTypeSchema.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An Error Occured' });
  }
};

exports.details = async (req, res) => {
  try {
    const data = await petTypeSchema.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An Error Occured' });
  }
};

exports.create = async (req, res) => {
  const newData = new petTypeSchema(req.body);
  try {
    const data = await newData.save();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An Error Occured' });
  }
};

exports.update = async (req, res) => {
  try {
    const data = await petTypeSchema.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An Error Occured' });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await petTypeSchema.findByIdAndRemove(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'An Error Occured' });
  }
};
