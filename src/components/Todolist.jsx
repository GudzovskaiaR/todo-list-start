import Todo from "./Todo";

const Todolist = ({ todos, setDone, editTodoHandler, deleteTodoHandler }) => {
    return (
        <ul className="todo-list">
            { todos.map((todo, index) => <Todo 
                                            key={ todo.id } 
                                            index={ index } 
                                            todo={ todo }
                                            setDone={ setDone }
                                            editTodoHandler = { editTodoHandler }
                                            deleteTodoHandler= {deleteTodoHandler}
                                        />
                        )
            }
            
        </ul>
    );
}

export default Todolist;