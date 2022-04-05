import React, { useState } from 'react';
import CreateTodo from '../components/CreateTodo';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNotes] = useState('');
  return (
    <div>
      <h1>My Todos List</h1>
      <CreateTodo newNote={newNote} setNewNotes={setNewNotes} />
    </div>
  );
}

//why is set newNote an empty stirng but set notes in an array. ?
