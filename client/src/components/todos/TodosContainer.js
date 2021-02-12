import React, { useState, useEffect } from 'react';
import Todos from './TodosComponent';
import api from '../../services/api';

const TodosContainer = ({ todoAdded }) => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoUpdated, setTodoUpdated] = useState(false);
  const [todoDeleted, setTodoDeleted] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const path = '/todo';

      const response = await api.request({ method: 'get', path });
      console.log('todos', response);

      setTodos(response.data);
      setLoading(false);
    })();
  }, [todoAdded, todoUpdated, todoDeleted]);

  const updateTodoCompleted = async (data, id) => {
    setTodoUpdated(false);

    setLoading(true);

    const path = `/todo/completed/${id}`;

    await api.request({ method: 'put', data, path });

    setTodoUpdated(true);
    setLoading(false);
  };

  const updateTodo = async (data, id) => {
    setTodoUpdated(false);

    setLoading(true);

    const path = `/todo/${id}`;

    console.log(path);

    await api.request({ method: 'put', data, path });

    setTodoUpdated(true);
    setLoading(false);
  };

  const deleteTodo = async (id) => {
    setTodoDeleted(false);

    setLoading(true);

    const path = `/todo/${id}`;

    console.log(path);

    await api.request({ method: 'delete', path });

    setTodoDeleted(true);
    setLoading(false);
  };
  return (
    <Todos
      todoAdded={todoAdded}
      loading={loading}
      todos={todos}
      updateTodoCompleted={updateTodoCompleted}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default TodosContainer;
