const { BloodStockDAO } = require("../dao");

const addBloodStock = async (req, res, next) => {
    try {
        const { bloodGroup } = req.body;
        if (bloodGroup) {
            res.json({
                success: true,
                message: "BloodStock added successfully",
                data: await BloodStockDAO.addBloodStock(req.body),
            });
        } else {
            res.json({
                success: false,
                message: "Missing Data",
                errors: [],
                warnings: [],
                data: [],
            })
        }
    } catch (error) {
        console.log("error", error);
        res.json({
            success: false,
            message: error?.message
        })

    }
};

const getBloodStock = async (req, res, next) => {
    try {
        res.json({
            success: true,
            message: "BloodStock read successfully",
            data: await BloodStockDAO.getBloodStock(req, req.body)
        });
    } catch (error) {
        res.json({
            success: false,
            message: error?.message
        });
    }
};

const updateBloodStock = async (req, res, next) => {
    try {
        res.json({
            success: true,
            message: "BloodStock updated successfully",
            data: await BloodStockDAO.updateBloodStock(req.body.query, req.body.updateData)
        });
    } catch (error) {
        res.json({
            success: false,
            message: error?.message
        });
    }
};

const deleteBloodStock = async (req, res, next) => {
    try {
        res.json({
            success: true,
            message: "BloodStock deleted successfully",
            data: await BloodStockDAO.deleteBloodStock(req.body)
        });
    } catch (error) {
        res.json({
            success: false,
            message: error?.message
        });
    }
};

module.exports = { addBloodStock, getBloodStock, updateBloodStock, deleteBloodStock };
