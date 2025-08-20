const { UserDAO } = require("../dao");

const login = async (req, res, next) => {
    try {
        const { email = null, phone = null, password = null } = req?.body;
        if ((email || phone) && password) {
            let query = {password};
            if(email) {
                query.email = email;
            }
            if(phone) {
                query.phone = phone;
            }
            let authResponse = await UserDAO.getUser(req, query);
            res.json({
                success: authResponse?.length? true : false,
                statusCode: 200,
                message: authResponse?.length?"Authenticated successfully" : "Invalid Credentails",
                errors: [],
                warnings: [],
                data: authResponse,
            });
        } else {
            res.json({
                success: false,
                statusCode: 1501,
                message: "Parameter missing",
                errors: [],
                warnings: [],
                data: [],
            });
        }
    } catch (error) {
        res.json({
            success: false,
            statusCode: 1501,
            message: error?.message,
            errors: [],
            warnings: [],
            data: [],
        });
    }
};

module.exports = { login };