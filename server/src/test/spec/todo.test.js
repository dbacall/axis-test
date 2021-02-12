const expect = require('chai').expect;
const { assert } = require('chai');
const Todo = require('../../models/Todo');
const addTodo = require('../helpers/addTodo');
const supertest = require('supertest');
const app = require('../../app');

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

  it('should get all todos', async () => {
    const completeDate = new Date(2021, 02, 24);

    await addTodo('Tech Test', 'complete tech test', completeDate);
    await addTodo('Shopping', 'Do shopping', completeDate);

    const data = await supertest(app).get('/todo');

    expect(data.body).to.have.length(2);
    expect(data.body[0].name).to.equal('Tech Test');
    expect(data.body[1].name).to.equal('Shopping');
  });

  it('should update a todo', async () => {
    const completeDate = new Date(2021, 02, 24);

    const todo = await addTodo('Tech Test', 'complete tech test', completeDate);

    const update = { description: 'complete tech test quicker' };
    const res = await supertest(app).put(`/todo/${todo.data._id}`).send(update);
    console.log(res.body);

    const data = await Todo.findOne({ name: 'Tech Test' });

    expect(data.name).to.equal('Tech Test');
    expect(data.description).to.equal('complete tech test quicker');
  });

  it('should delete a todo', async () => {
    const completeDate = new Date(2021, 02, 24);

    const todo = await addTodo('Tech Test', 'complete tech test', completeDate);

    const res = await supertest(app).delete(`/todo/${todo.data._id}`);

    const data = await Todo.findOne({ name: 'Tech Test' });

    expect(data).to.be.null;
  });

  it.only('should update if a todo is completed', async () => {
    const completeDate = new Date(2021, 02, 24);

    const todo = await addTodo('Tech Test', 'complete tech test', completeDate);

    const update1 = { completed: true };
    await supertest(app).put(`/todo/completed/${todo.data._id}`).send(update1);

    let data = await Todo.findOne({ name: 'Tech Test' });

    expect(data.name).to.equal('Tech Test');
    expect(data.completed).to.be.true;

    const update2 = { completed: false };
    await supertest(app).put(`/todo/completed/${todo.data._id}`).send(update2);

    data = await Todo.findOne({ name: 'Tech Test' });

    expect(data.name).to.equal('Tech Test');
    expect(data.completed).to.be.false;
  });
});
