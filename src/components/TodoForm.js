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
        Title
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Task
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <label>
        <input type="text" value={by} onChange={(e) => setBy(e.target.value)} />
      </label>
      by
      <button onClick={handleSubmit}>save</button>
    </div>
  );
}
