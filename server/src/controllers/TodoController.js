const Todo = require('../models/Todo');

const TodoController = {
  create: async (req, res) => {
    var newTodo = new Todo(req.body);

    await newTodo
      .save()
      .then(() =>
        res.status(200).json({ message: 'Todo successfully added to database' })
      )
      .catch(() =>
        res.status(400).json({ error: 'Todo could not be added to database.' })
      );
  },
};

module.exports = TodoController;
