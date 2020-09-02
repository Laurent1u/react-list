import React from 'react';

const Todo = ({ id, text, completed, deleteTodo, completeTodo }) => {
const deleteHandler = () => {
    deleteTodo(id);
}
const completeHandler = () => {
    completeTodo(id);
}

    return (
        <div className="todo">
            <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler} ><i className="fas fa-check"></i></button>
            <button className="delete-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;