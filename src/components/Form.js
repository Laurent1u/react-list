import React from 'react';

const Form = ({ setInputText, saveTodo, setStatus }) => {
    // js function
    const inputTextHandle = e => {
        let {value} = e.target;
        setInputText(value);
    }

    const submitTodoHandler = e => {
        e.preventDefault();
        saveTodo();

        // reset input field
        let inputField = document.querySelector('input');
        inputField.value = '';
    }

    const statusHandler = e => {
        let {value} = e.target;
        setStatus(value);
    }

    return (
        <form onSubmit={submitTodoHandler}>
            <input type="text" className="todo-input" onKeyUp={inputTextHandle} />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;