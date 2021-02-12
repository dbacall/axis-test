import styles from './App.module.scss';
import AddTodo from './components/addTodo/addTodoContainer';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h2>Axis Todo</h2>
      </header>
      <AddTodo />
    </div>
  );
}

export default App;
