const { BloodStockModel } = require("../model");

const addBloodStock = async (BloodStockData) => {
    try {
        BloodStockData = Array.isArray(BloodStockData) ? BloodStockData : [BloodStockData];
        return await BloodStockModel.insertMany(BloodStockData);
    } catch (error) {
        throw error;
    }
};

const getBloodStock = async (req, query) => {
    try {
        return await BloodStockModel.find(query)
            .lean()
            .exec();
    } catch (error) {
        throw error;
    }
};

const updateBloodStock = async (
    query,
    updateData
) => {
    try {
        return await BloodStockModel.findOneAndUpdate(query, updateData)
            .lean()
            .exec();
    } catch (error) {
        throw error;
    }
};

const deleteBloodStock = async (deleteQuery) => {
    try {
        return await BloodStockModel.deleteOne(deleteQuery).lean().exec();
    } catch (error) {
        throw error;
    }
};

module.exports = {
    addBloodStock,
    getBloodStock,
    updateBloodStock,
    deleteBloodStock,
};
