import React, { useState } from 'react';
import './Todos.css';
import Loader from '../commons/Loader';
import { format, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';
import Checkbox from '@material-ui/core/Checkbox';

const Todos = ({
  loading,
  todos,
  updateTodoCompleted,
  deleteTodo,
  updateTodo,
}) => {
  const [openForm, setOpenForm] = useState(false);
  const [todoIndexToEdit, setTodoIndexToEdit] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dateToCompleteBy, setDateToCompleteBy] = useState('');

  const handleUpdateCompleted = ({ id, completed }) => {
    const data = {
      completed: !completed,
    };
    updateTodoCompleted(data, id);
  };

  const handleUpdate = (id) => {
    const data = {
      name,
      description,
      dateToCompleteBy,
    };
    updateTodo(data, id);
    setOpenForm(false);
    setTodoIndexToEdit(null);
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
                className="edit-form-input"
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
                className="edit-form-input"
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
                className="edit-form-input"
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
                handleUpdateCompleted({
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
                onClick={() => handleUpdate(todo._id)}
                className="edit-btn"
              >
                Complete Edit
              </button>
            ) : (
              <button
                onClick={() => {
                  setTodoIndexToEdit(index);
                  setOpenForm(!openForm);
                }}
                className="edit-btn"
              >
                Edit
              </button>
            )}
          </td>
          <td>
            <button
              onClick={() => handleDelete(todo._id)}
              className="delete-btn"
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div>
      <h3>Todos</h3>
      {loading ? (
        <Loader />
      ) : (
        // renderEditForm()
        <div className="table-container">
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
        </div>
      )}
    </div>
  );
};

export default Todos;
