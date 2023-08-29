const Character = require('../models/CharacterSchema');

exports.list = async (req, res) => {
  try {
    const data = await Character.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.details = async (req, res) => {
  try {
    const data = await Character.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.create = async (req, res) => {
  const newData = new Character(req.body);
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
    const data = await Character.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = await Character.findByIdAndRemove(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
