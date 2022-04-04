import React from 'react';
// import getTodos from '../services/todos';

export default function TodoForm({
  title,
  setTitle,
  message,
  setMessage,
  by,
  setBy,
  handleSubmit,
}) {
  return (
    <div>
      <h1>Create Todo List</h1>
      <label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
    </div>
  );
}
