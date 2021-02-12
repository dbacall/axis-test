const mongoose = require('mongoose');

module.exports = () => {
  // set up database connection

  const url = process.env.DB_URL;

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log(
        `Successfully connected to ${process.env.NODE_ENV} mongoDB database.`
      );
    })
    .catch((err) => console.log(err));
};
