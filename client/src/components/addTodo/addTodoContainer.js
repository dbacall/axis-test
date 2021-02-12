import React, { useState } from 'react';
import AddTodo from './addTodoComponent';
import api from '../../services/api';

const AddTodoContainer = () => {
  const [todoAdded, setTodoAdded] = useState(false);

  const createTodo = async (data) => {
    const path = '/todo';

    await api.request({ method: 'post', data, path });

    setTodoAdded(true);
  };

  return <AddTodo createTodo={createTodo} todoAdded={todoAdded} />;
};

export default AddTodoContainer;
