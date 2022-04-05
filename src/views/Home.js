import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import CreateTodo from '../components/CreateTodo';
import getTodos, { createTodos, updateCompleted } from '../services/todos';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNotes] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setNotes(data);
    };
    fetchData();
  }, []);
  const handleSubmit = async () => {
    const info = await createTodos(newNote);
    setNewNotes('');
    const updatedToDos = await getTodos();
    setNotes(updatedToDos);
  };
  const handleClick = async (notes) => {
    const info = await updateCompleted(notes.id, !notes.complete);
    setNewNotes((prevState) => prevState.map(todosReact.id === notes.id ? info : todosReact));
  };
  return (
    <div>
      <h1>My Todos List</h1>
      <CreateTodo newNote={newNote} setNewNotes={setNewNotes} />
    </div>
  );
}

//why is set newNote an empty stirng but set notes in an array. ?

// setting state
// the handleSubmit gets the new info from the create inputs and saves it into a string format. Object.
// updated todos rendering new info on page and saves to do
