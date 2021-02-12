const Todo = require('../models/Todo');

const TodoController = {
  create: async (req, res) => {
    var newTodo = new Todo(req.body);

    await newTodo
      .save()
      .then((todo) =>
        res
          .status(200)
          .json({ message: 'Todo successfully added to database', todo })
      )
      .catch((error) =>
        res
          .status(400)
          .json({ message: 'Todo could not be added to database', error })
      );
  },

  getAll: (req, res) => {
    Todo.find().then((todos) => {
      res.status(200).send(todos);
    });
  },
};

module.exports = TodoController;
