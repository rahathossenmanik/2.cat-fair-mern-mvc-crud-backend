var mongoose = require('mongoose');
const Pet = require('../models/PetSchema');
const PetType = require('../models/PetTypeSchema');
const Character = require('../models/CharacterSchema');

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
  const petType = await PetType.findById(req.body.petType);
  if (!petType) {
    res.status(400).send({ message: 'Pet Type not found' });
    return;
  }

  const character = await Character.findById(req.body.character);
  if (!character) {
    res.status(400).send({ message: 'Character not found' });
    return;
  }

  const newData = new Pet(req.body);
  const error = newData.validateSync();
  if (error) {
    res.status(400).send({ message: error.message, error });
    return;
  }

  try {
    const data = await newData.save();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.update = async (req, res) => {
  const petType = await PetType.findById(req.body.petType);
  if (!petType) {
    res.status(400).send({ message: 'Pet Type not found' });
    return;
  }

  const character = await Character.findById(req.body.character);
  if (!character) {
    res.status(400).send({ message: 'Character not found' });
    return;
  }

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

exports.dogList = async (req, res) => {
  try {
    const data = await Pet.find({ petType: mongoose.Types.ObjectId('64ecb73ed3988b6470ea3687') })
      .populate('petType')
      .populate('character');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.catList = async (req, res) => {
  try {
    const data = await Pet.find({ petType: mongoose.Types.ObjectId('64ec9c3a0b80aac7042c8802') })
      .populate('petType')
      .populate('character');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.birdList = async (req, res) => {
  try {
    const data = await Pet.find({ petType: mongoose.Types.ObjectId('64ef2bdf577ab6435f7cfb1a') })
      .populate('petType')
      .populate('character');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.reptileList = async (req, res) => {
  try {
    const data = await Pet.find({ petType: mongoose.Types.ObjectId('64ef2be7577ab6435f7cfb1c') })
      .populate('petType')
      .populate('character');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

exports.loveReaction = async (req, res) => {
  try {
    const data = await Pet.findByIdAndUpdate(req.params.id, { $inc: { loveCount: 1 } });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
