import React, { useState } from 'react';
import './Todos.css';
import Loader from '../commons/Loader';
import { format, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';
import Checkbox from '@material-ui/core/Checkbox';

const Todos = ({ loading, todos, updateTodoCompleted, deleteTodo }) => {
  const handleUpdate = ({ id, completed }) => {
    const data = {
      completed: !completed,
    };
    updateTodoCompleted(data, id);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const renderTodoRows = () => {
    if (todos.length > 0) {
      return todos.map((todo, index) => (
        <tr key={index}>
          <td>{todo.name}</td>
          <td>{todo.description}</td>
          <td>
            {todo.dateToCompleteBy &&
              format(parseISO(todo.dateToCompleteBy), 'P', { locale: enGB })}
          </td>
          <td>
            <Checkbox
              checked={todo.completed}
              onChange={() => {
                handleUpdate({
                  id: todo._id,
                  completed: todo.completed,
                });
              }}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </td>
          <td>
            <button>Edit</button>
          </td>
          <td>
            <button onClick={() => handleDelete(todo._id)}>Delete</button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div className="Todos">
      <h3>Todos</h3>
      {loading ? (
        <Loader />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Date To Complete By</th>
              <th>Completed</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderTodoRows()}</tbody>
        </table>
      )}
    </div>
  );
};

export default Todos;
