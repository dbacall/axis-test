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
        <form onSubmit={submitTodo} className="add-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="add-form-input"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="add-form-input"
          />
          <input
            type="date"
            placeholder="Date to complete"
            value={dateToCompleteBy}
            onChange={(e) => setDateToCompleteBy(e.target.value)}
            className="add-form-input date-input"
          />
          <button className="add-submit-btn">Submit</button>
        </form>
      );
    }
  };

  return (
    <div className="addTodo">
      <button onClick={() => setOpenForm(!openForm)} className="add-btn">
        Add Todo
      </button>
      {renderForm()}
      <Todos todoAdded={todoAdded} />
    </div>
  );
};

export default AddTodo;
