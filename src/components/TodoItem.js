// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
