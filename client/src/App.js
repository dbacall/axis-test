import React from 'react';
import './App.css';
import AddTodo from './components/addTodo/addTodoContainer';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <h2>Axis Todo</h2>
      </header>
      <AddTodo />
    </div>
  );
}

export default App;
