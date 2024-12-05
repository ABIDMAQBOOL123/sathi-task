const Data = require("../models/Data");

const addData = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newData = new Data({ title, description });
    await newData.save();
    res.status(201).json({ message: "Data created successfully", dataId: newData._id });
  } catch (err) {
    next(err);
  }
};

const getData = async (req, res, next) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const updateData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedData = await Data.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Data updated successfully", updatedData });
  } catch (err) {
    next(err);
  }
};

const deleteData = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Data.findByIdAndDelete(id);
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = { addData, getData, updateData, deleteData };
