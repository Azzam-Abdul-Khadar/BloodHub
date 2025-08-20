const { RequestDAO } = require("../dao");
const {
  sendRequestToHospital,
  ackBloodRequestRequest,
} = require("../utils/mailHelper");

const addRequest = async (req, res, next) => {
  try {
    const { bloodGroup } = req.body;
    if (bloodGroup) {
      let [requestData] = await RequestDAO.addRequest(req.body);
      [requestData] = await RequestDAO.getRequest(req, {
        _id: requestData._id,
      });
      await sendRequestToHospital({
        to: requestData.to.email,
        fName: requestData.from.fName,
        lName: requestData.from.lName,
        contact: requestData.from.contact,
        bloodGroup: requestData.bloodGroup,
        quantity: requestData.quantity,
      });
      res.json({
        success: true,
        message: "Request added successfully",
        data: requestData,
      });
    } else {
      res.json({
        success: false,
        message: "Missing Data",
        errors: [],
        warnings: [],
        data: [],
      });
    }
  } catch (error) {
    console.log("error", error);
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getRequest = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Request read successfully",
      data: await RequestDAO.getRequest(req, req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateRequest = async (req, res, next) => {
  try {
    let requestData = await RequestDAO.updateRequest(
      req.body.query,
      req.body.updateData
    );
    [requestData] = await RequestDAO.getRequest(req, {
      _id: req.body.query._id,
    });
    await ackBloodRequestRequest({
      to: requestData.from.email,
      fName: requestData.from.fName,
      lName: requestData.from.lName,
      bloodGroup: requestData.bloodGroup,
      quantity: requestData.quantity,
      status: req.body.updateData.status,
    });

    res.json({
      success: true,
      message: "Request updated successfully",
      data: requestData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteRequest = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Request deleted successfully",
      data: await RequestDAO.deleteRequest(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = { addRequest, getRequest, updateRequest, deleteRequest };
