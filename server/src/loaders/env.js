module.exports = () => {
  const dotenv_config = {};

  if (process.env.ENV_FILE) {
    dotenv_config.path = `${__dirname}/../config/.env.${process.env.ENV_FILE}`;
  }

  const dotenv = require('dotenv').config(dotenv_config);

  if (!dotenv) {
    throw new Error('No .env file found.');
  }
};
