const { UserDAO, BloodStockDAO } = require("../dao");

const addUser = async (req, res, next) => {
  try {
    const { fName, userType, email, contact } = req.body;
    if (fName || userType || email || contact) {
      let [userData] = await UserDAO.addUser(req.body);
      if (userData.userType == "hospital") {
        let bloodGroups = [
          "A+",
          "A-",
          "B+",
          "B-",
          "O+",
          "O-",
          "AB+",
          "AB-",
        ].map((blood, index) => {
          return {
            hospital: userData._id,
            bloodGroup: blood,
            quantity: 0,
          };
        });
        await BloodStockDAO.addBloodStock(bloodGroups);
      }
      res.json({
        success: true,
        message: "User added successfully",
        data: [userData],
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

const getUser = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "User read successfully",
      data: await UserDAO.getUser(req, req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "User updated successfully",
      data: await UserDAO.updateUser(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "User deleted successfully",
      data: await UserDAO.deleteUser(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = { addUser, getUser, updateUser, deleteUser };
