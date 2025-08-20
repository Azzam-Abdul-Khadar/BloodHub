const express = require("express");
const { UserController, RequestController, BloodStockController, AuthController } = require("../controller");
const router = express.Router();

router.post("/add-user", UserController.addUser);
router.post("/get-user", UserController.getUser);
router.put("/update-user", UserController.updateUser);
router.delete("/delete-user", UserController.deleteUser);

router.post("/add-request", RequestController.addRequest);
router.post("/get-request", RequestController.getRequest);
router.put("/update-request", RequestController.updateRequest);
router.delete("/delete-request", RequestController.deleteRequest);

router.post("/add-bloodstock", BloodStockController.addBloodStock);
router.post("/get-bloodstock", BloodStockController.getBloodStock);
router.put("/update-bloodstock", BloodStockController.updateBloodStock);
router.delete("/delete-bloodstock", BloodStockController.deleteBloodStock);

router.post("/login", AuthController.login);



module.exports = router;