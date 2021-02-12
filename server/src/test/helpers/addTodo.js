const supertest = require('supertest');
const app = require('../../app');

module.exports = async (name, description, dateToCompleteBy) => {
  const data = {
    name,
    description,
    dateToCompleteBy,
  };

  const result = await supertest(app).post('/todo').send(data);

  console.log(result.body);

  return result.body;
};
