const { RequestModel, BloodStockModel } = require("../model");

const addRequest = async (RequestData) => {
  try {
    return await RequestModel.create([RequestData]);
  } catch (error) {
    throw error;
  }
};

const getRequest = async (req, query) => {
  try {
    return await RequestModel.find(query)
      .populate([
        {
          path: "to",
          model: "user",
          select: "fName lName email",
        },
        {
          path: "from",
          model: "user",
          select: "fName lName email contact",
        },
      ])
      .lean()
      .exec();
  } catch (error) {
    throw error;
  }
};

const updateRequest = async (query, updateData) => {
  try {
    let requestData = await RequestModel.findOne(query).lean().exec();
    if (updateData.status == "accepted") {
      await BloodStockModel.findOneAndUpdate(
        {
          hospital: requestData.to,
          bloodGroup: requestData.bloodGroup,
        },
        { $inc: { quantity: -requestData.quantity } }
      )
        .lean()
        .exec();
    }
    return await RequestModel.findOneAndUpdate(query, updateData).lean().exec();
  } catch (error) {
    throw error;
  }
};

const deleteRequest = async (deleteQuery) => {
  try {
    return await RequestModel.deleteOne(deleteQuery).lean().exec();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addRequest,
  getRequest,
  updateRequest,
  deleteRequest,
};
