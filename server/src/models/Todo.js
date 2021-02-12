const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  task: {
    type: String,
    required: true,
    minLength: [1, 'You must type something'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
