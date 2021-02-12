import React, { useState } from 'react';
import './Todos.css';
import Loader from '../commons/Loader';
import { format, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';
import Checkbox from '@material-ui/core/Checkbox';

const Todos = ({ loading, todos, updateTodoCompleted, deleteTodo }) => {
  const [openForm, setOpenForm] = useState(false);
  const [todoIndexToEdit, setTodoIndexToEdit] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dateToCompleteBy, setDateToCompleteBy] = useState('');

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
          <td>
            {index === todoIndexToEdit ? (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              todo.name
            )}
          </td>
          <td>
            {index === todoIndexToEdit ? (
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            ) : (
              todo.description
            )}
          </td>
          <td>
            {index === todoIndexToEdit ? (
              <input
                type="date"
                placeholder="Date to complete"
                value={dateToCompleteBy}
                onChange={(e) => setDateToCompleteBy(e.target.value)}
              />
            ) : (
              todo.dateToCompleteBy &&
              format(parseISO(todo.dateToCompleteBy), 'P', { locale: enGB })
            )}
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
            {index === todoIndexToEdit ? (
              <button
                onClick={() => {
                  setTodoIndexToEdit(index);
                  setOpenForm(!openForm);
                }}
              >
                Complete Edit
              </button>
            ) : (
              <button
                onClick={() => {
                  setTodoIndexToEdit(index);
                  setOpenForm(!openForm);
                }}
              >
                Edit
              </button>
            )}
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
        // renderEditForm()
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
