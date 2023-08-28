const Pet = require('../models/PetSchema');

exports.list = async (req, res) => {
  try {
    const data = await Pet.find().populate('petType').populate('character');
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.details = async (req, res) => {
  try {
    const data = await Pet.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.create = async (req, res) => {
  const newData = new Pet(req.body);
  const error = newData.validateSync();
  if (error) {
    res.status(400).send({ message: error.message, error });
  } else {
    try {
      const data = await newData.save();
      res.status(200).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  }
};

exports.update = async (req, res) => {
  try {
    const data = await Pet.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await Pet.findByIdAndRemove(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
