import React from 'react';

export default function CreateTodo({ newNote, setNewNote, handleSubmit }) {
  return (
    <div>
      <input
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        type="text"
        placeholder="add new note"
      />
      <button onClick={handleSubmit}>save</button>
    </div>
  );
}
// why are there dependencies in this fucntion but normally it is left blank. Is it because we are being specific with id? not sure why. or what is dependent on what> The todo is dependent on the inputs?
