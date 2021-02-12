import React, { useState } from 'react';
import Todos from './TodosComponent';
import api from '../../services/api';

const TodosContainer = ({ todoAdded }) => {
  return <Todos todoAdded={todoAdded} />;
};

export default TodosContainer;
