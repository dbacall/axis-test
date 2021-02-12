import React, { useState } from 'react';
import styles from './addTodo.module.scss';

const AddTodo = () => {
  const [openForm, setOpenForm] = useState(false);

  const renderForm = () => {
    if (openForm) {
      return (
        <form>
          <input type="text" />
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
