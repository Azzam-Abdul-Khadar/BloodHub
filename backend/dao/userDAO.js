const { UserModel } = require("../model");

const addUser = async (UserData) => {
  try {
    return await UserModel.create([UserData]);
  } catch (error) {
    throw error;
  }
};

const getUser = async (req, query) => {
  try {
    return await UserModel.find(query).lean().exec();
  } catch (error) {
    throw error;
  }
};

const updateUser = async (query, updateData) => {
  try {
    return await UserModel.findOneAndUpdate(query, updateData, { new: true })
      .lean()
      .exec();
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (deleteQuery) => {
  try {
    return await UserModel.deleteOne(deleteQuery).lean().exec();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser,
};
