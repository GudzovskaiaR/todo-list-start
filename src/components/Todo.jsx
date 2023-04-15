const Todo = ({ todo, index, setDone, editTodoHandler, deleteTodoHandler }) => {
 

  return (
    <li className={todo.done ? `todo-item todo-item-done` : `todo-item`}>
      <input
        className="todo-item-inner"
        type="checkbox"
        checked={todo.done}
        onChange={() => {
          setDone(todo.id);
        }}
      />
      <span className="todo-item-inner">{index + 1}</span>
      <span className="todo-item-inner">{todo.text}</span>

      <div className="todo-item-actions">
        <button className="btn btn-edit" onClick={() => {editTodoHandler(index)}}>
          <i className="fa-solid fa-square-pen"></i>
        </button>
        <button className="btn btn-del" onClick={() => {deleteTodoHandler(todo.id)}}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default Todo;
