import { useState } from 'react';

const Search = ({ todosSearch }) => {
  const [text, setText] = useState('');

  const addNewTodo = (event) => {
    event.preventDefault();
    todosSearch(text);
    setText('');
  };
  return (
    <form className="search" onSubmit={addNewTodo}>
      <input
        placeholder="Search..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button className="search-btn" type="submit">
        <img src="/img/icon 1.svg" alt="" />
      </button>
    </form>
  );
};
export default Search;
