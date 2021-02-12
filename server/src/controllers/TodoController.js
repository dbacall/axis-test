const Todo = require('../models/Todo');

const TodoController = {
  create: async (req, res) => {
    var newTodo = new Todo(req.body);

    await newTodo
      .save()
      .then((data) =>
        res
          .status(200)
          .json({ message: 'Todo successfully added to database', data })
      )
      .catch((error) =>
        res
          .status(400)
          .json({ message: 'Todo could not be added to database', error })
      );
  },

  getAll: async (req, res) => {
    await Todo.find().then((todos) => {
      res.status(200).send(todos);
    });
  },

  update: async (req, res) => {
    await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        description: req.body.description,
        dateToCompleteBy: req.body.dateToCompleteBy,
        completed: req.body.completed,
      }
    )
      .then((data) =>
        res.status(200).send({ message: 'Todo successfully updated', data })
      )
      .catch(() =>
        res.status(400).send({ error: 'Todo could not be updated.' })
      );
  },

  updateCompleted: async (req, res) => {
    await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        completed: req.body.completed,
      }
    )
      .then((data) =>
        res.status(200).send({ message: 'Todo successfully updated', data })
      )
      .catch(() =>
        res.status(400).send({ error: 'Todo could not be updated.' })
      );
  },

  delete: async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
      .then((data) =>
        res.status(200).send({ message: 'Todo successfully deleted', data })
      )
      .catch(() =>
        res.status(400).send({ error: 'Todo could not be deleted.' })
      );
  },
};

module.exports = TodoController;
