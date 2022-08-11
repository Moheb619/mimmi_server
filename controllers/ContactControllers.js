import ContactModel from "./../models/ContactModels.js";

export const contactMessages = async (req, res, next) => {
  const newMessages = new ContactModel(req.body);
  try {
    const savedMessages = await newMessages.save();
    res.status(200).json(savedMessages);
  } catch (err) {
    next(err);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const allMessanges = await ContactModel.find({});
    res.status(200).json(allMessanges);
  } catch (err) {
    next(err);
  }
};

export const deleteMessages = async (req, res, next) => {
  try {
    await ContactModel.findByIdAndDelete(req.body.id);
    res.status(200).json("Messages has been deleted.");
  } catch (err) {
    next(err);
  }
};
