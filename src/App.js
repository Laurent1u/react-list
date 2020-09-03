import React, { useState, useEffect } from 'react';
import './App.css';

// import custom components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodo] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocaleTodos();
  }, [todos, status]);

  const saveTodo = () => {
    if (inputText) {
      setTodo([...todos, {
          id: Math.random() * 1000,
          text: inputText, 
          completed: false}
      ]);
      setInputText('');
    }
  }

  const deleteTodo = id => {
    setTodo(todos.filter(
      todo => todo.id !== id
    ));
  }

  const completeTodo = id => {
    setTodo(todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo, completed: !todo.completed
          }
        }
        return todo;
    }));
  }

  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      default:
        setFilteredTodos(todos);
      break;
    }
  }

  const saveLocaleTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos')) {
      const localStorageTodos = JSON.parse(localStorage.getItem("todos"));
      setTodo(localStorageTodos);
    }
  }

  return (
    <div>
      <header>
        <h1>Shopping List</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        saveTodo={saveTodo} 
        setStatus={setStatus} 
        />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        completeTodo={completeTodo}
        filteredTodos={filteredTodos} 
        />
    </div>
  );
}

export default App;
