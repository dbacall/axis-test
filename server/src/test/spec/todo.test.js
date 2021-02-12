const expect = require('chai').expect;
const { assert } = require('chai');
const Todo = require('../../models/Todo');
const addTodo = require('../helpers/addTodo');

describe('Todo', () => {
  it('should add a todo', async () => {
    const completeDate = new Date(2021, 02, 24);

    await addTodo('Tech Test', 'complete tech test', completeDate);

    const data = await Todo.findOne({ name: 'Tech Test' });

    expect(data.name).to.equal('Tech Test');
    expect(data.description).to.equal('complete tech test');
    expect(data.completed).to.be.false;
    assert.deepEqual(data.dateToCompleteBy, completeDate);
  });
});
