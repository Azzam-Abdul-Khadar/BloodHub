const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log(`Connected to Mongodb on ${process.env.DB_URL}`);
  })
  .catch((error) => {
    console.log("Mongodb connection error ", error);
  });

module.exports = mongoose;
