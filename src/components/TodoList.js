import React from 'react';

// import custom components
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo, filteredTodos }) => {
    return (
       <div className="todo-container">
           <ul className="todo-list">
               {
                   filteredTodos.map(todo => (
                       <Todo 
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed} 
                            deleteTodo={deleteTodo}
                            completeTodo={completeTodo}
                            />
                   ))
               }
           </ul>
       </div>
    );
}

export default TodoList;