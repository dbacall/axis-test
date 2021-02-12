import React, { useState } from 'react';
import styles from './addTodo.module.scss';

const AddTodo = () => {
  const [openForm, setOpenForm] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dateToCompleteBy, setDateToCompleteBy] = useState('');

  const renderForm = () => {
    if (openForm) {
      return (
        <form>
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
        </form>
      );
    }
  };

  return (
    <div className={styles.addTodo}>
      <button onClick={() => setOpenForm(!openForm)}>Add Todo</button>
      {renderForm()}
    </div>
  );
};

export default AddTodo;
