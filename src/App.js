// src/App.js
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  // Khôi phục todos từ localStorage hoặc khởi tạo mảng rỗng
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Cập nhật localStorage mỗi khi todos thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
};

export default App;
