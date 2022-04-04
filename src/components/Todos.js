import React, { useEffect, useState } from 'react';
import getTodos from '../services/todos';
import TodoForm from './TodoForm';

export default function Todos() {
  const [todos, setTodos] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, []);
  return <div></div>;
}
