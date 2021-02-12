import React, { useState } from 'react';
import './addTodo.css';
import Todos from '../todos/TodosContainer';

const AddTodo = ({ createTodo, todoAdded }) => {
  const [openForm, setOpenForm] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dateToCompleteBy, setDateToCompleteBy] = useState('');

  const submitTodo = (e) => {
    e.preventDefault();

    const data = {
      name,
      description,
      dateToCompleteBy,
    };

    createTodo(data);
  };

  const renderForm = () => {
    if (openForm) {
      return (
        <form onSubmit={submitTodo}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date to complete"
            value={dateToCompleteBy}
            onChange={(e) => setDateToCompleteBy(e.target.value)}
          />
          <button>Submit</button>
        </form>
      );
    }
  };

  return (
    <div className="addTodo">
      <button onClick={() => setOpenForm(!openForm)}>Add Todo</button>
      {renderForm()}
      <Todos todoAdded={todoAdded} />
    </div>
  );
};

export default AddTodo;
