
const AddTodo = ({ onSubmitHandler, addButtonText, editText, setEditText }) => {

  const addNewTodo = (event) => {
    event.preventDefault();
    onSubmitHandler(editText, addButtonText[1]);
    setEditText('')
  };
  return (
    <form className="formAdd" onSubmit={addNewTodo}>
      <input
        className="formInput"
        placeholder="Enter new todo"
        value={editText}
        onChange={(e) => {
          setEditText(e.target.value);
        }}
      />
      <button className="formButton" type="submit">
        {addButtonText[0]}
      </button>
    </form>
  );
};
export default AddTodo;
