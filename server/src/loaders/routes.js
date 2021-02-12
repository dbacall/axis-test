const todo = require('../api/todo');

module.exports = (app) => {
  // Routes
  app.use('/todo', todo);
};
