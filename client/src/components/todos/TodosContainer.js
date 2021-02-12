import React, { useState, useEffect } from 'react';
import Todos from './TodosComponent';
import api from '../../services/api';

const TodosContainer = ({ todoAdded }) => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const path = '/todo';

      const response = await api.request({ method: 'get', path });

      setTodos(response.data);
      setLoading(false);
    })();
  }, [todoAdded]);
  return <Todos todoAdded={todoAdded} loading={loading} todos={todos} />;
};

export default TodosContainer;
