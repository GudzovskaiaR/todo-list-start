import { useState } from 'react';
import Todolist from './components/Todolist';
import AddTodo from './components/AddTodo';
import Search from './components/Search';
import Buttons from './components/Buttons';

function App() {
 
  const [todos, setTodos] = useState( [
    { id: 1, text: 'learn HTML', done: false },
    { id: 2, text: 'learn JS', done: false },
    { id: 3, text: 'learn React', done: false },
    { id: 4, text: 'learn Angular', done: false },
  ]);
  const [addButtonText, setButtonText] = useState(['add', null]);
  const [editText, setEditText] = useState('');

  

  // Додаємо та редагуємо todo
  function onSubmitHandler(text, index) {
    if (index === null) {
      const newId = todos.length + 1;

      setTodos([...todos, { id: newId, text: text, done: false }]);
    } else {
      // setButtonText(['add', '']);

      const newTodos = todos.map((todo) =>
        todo.id === index + 1 ? { ...todo, text: text } : todo
      );
      setTodos(newTodos);
    }
  }

  // Виконали/не виконали завдання
  function setDone(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );

    setTodos( newTodos);
  }

  // Пошук задачі
  function todosSearch(text) {
    const newArr = todos.filter((item) => item.text.includes(text));
    setTodos(newArr);
  }
  // Пошук виконаних задач
  function listDoneHandler(element) {
    if (element === 'true') {
      const doneTodos = todos.filter((item) => item.done === true);

      setTodos(doneTodos);
    } else {
      setTodos(todos);
    }
  }
  // Редагування тексту todo
  function editTodoHandler(indexTodo) {
    setButtonText(['save', indexTodo]);
    setEditText(todos[indexTodo].text);
  }
  // Видалення задачі
  function deleteTodoHandler(index) {
    const newTodos = todos.filter((todo) => todo.id !== index);
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <h1>Todo App</h1>
      <AddTodo
        onSubmitHandler={onSubmitHandler}
        addButtonText={addButtonText}
        editText={editText}
        setEditText={setEditText}
      />
      <Search todosSearch={todosSearch} />
      <Buttons listDoneHandler={listDoneHandler} />
      <Todolist
        todos={todos}
        setDone={setDone}
        editTodoHandler={editTodoHandler}
        deleteTodoHandler={deleteTodoHandler}
      />
    </div>
  );
}

export default App;
