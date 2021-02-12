import React, { useState, useEffect } from 'react';
import Todos from './TodosComponent';
import api from '../../services/api';

const TodosContainer = ({ todoAdded }) => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoUpdated, setTodoUpdated] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const path = '/todo';

      const response = await api.request({ method: 'get', path });
      console.log('todos', response);

      setTodos(response.data);
      setLoading(false);
    })();
  }, [todoAdded, todoUpdated]);

  const updateTodoCompleted = async (data, id) => {
    setTodoUpdated(false);

    setLoading(true);
    console.log(id);

    const path = `/todo/completed/${id}`;

    await api.request({ method: 'put', data, path });

    setTodoUpdated(true);
    setLoading(false);
  };
  return (
    <Todos
      todoAdded={todoAdded}
      loading={loading}
      todos={todos}
      updateTodoCompleted={updateTodoCompleted}
    />
  );
};

export default TodosContainer;
