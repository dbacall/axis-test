const supertest = require('supertest');
const app = require('../../app');

module.exports = async (task) => {
  const data = {
    task,
  };

  const result = await supertest(app).post('/todo').send(data);

  return result.body;
};
