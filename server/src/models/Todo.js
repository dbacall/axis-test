const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [1, 'You must type something'],
  },
  description: {
    type: String,
    required: true,
    minLength: [1, 'You must type something'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dateToCompleteBy: {
    type: Date,
  },
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
