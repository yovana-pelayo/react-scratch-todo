import { useState, useEffect } from 'react';
import CreateTodo from '../components/CreateTodo';
import Todos from '../components/Todos';
import { createTodos, updateCompleted, getTodos } from '../services/todos';
import './Home.css';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [newNotes, setNewNotes] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getTodos();
      setNotes(resp);
    };
    fetchData();
  }, []);
  const handleSubmit = async () => {
    const resp = await createTodos(newNotes);
    // setNewNotes('');
    // const updatedToDos = await getTodos();
    // setNotes(updatedToDos);
    setNotes((prev) => [...prev, resp[0]]);
  };
  const handleClick = async (note) => {
    await updateCompleted(note.id, !note.complete);
    const updatedToDos = await getTodos();
    setNotes(updatedToDos);
    // setNotes((prevState) => prevState.map((todos) => (todos.id === note.id ? resp : todos)));
  };
  return (
    <div>
      <h1>My Todos List</h1>
      <Todos notes={notes} handleClick={handleClick} />
      <CreateTodo newNotes={newNotes} setNewNotes={setNewNotes} handleSubmit={handleSubmit} />
    </div>
  );
}
