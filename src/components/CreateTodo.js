import React from 'react';

export default function CreateTodo({ newNotes, setNewNotes, handleSubmit }) {
  return (
    <div>
      <input
        value={newNotes}
        // required
        onChange={(e) => setNewNotes(e.target.value)}
        type="text"
        placeholder="add new note"
      />
      {''}
      <button onClick={handleSubmit}>save</button>
    </div>
  );
}
// why are there dependencies in this function but normally it is left blank. Is it because we are being specific with id? not sure why. or what is dependent on what> The todo is dependent on the inputs?
