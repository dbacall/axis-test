const expect = require('chai').expect;
const Todo = require('../../models/Todo');
const addTodo = require('../helpers/addTodo');

describe('Todo', () => {
  it('should add a todo', async () => {
    await addTodo('complete tech test');

    const data = await Todo.findOne({ task: 'complete tech test' });

    expect(data.task).to.equal('complete tech test');
    expect(data.completed).to.be.false;
  });
});
