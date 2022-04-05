import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createTodos } from '../services/todos';
import TodoForm from './TodoForm';
// import React from  './react'

export default function CreateTodo() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodosById(params.id);
      setTitle(data.title);
      setMessage(data.message);
      setBy(data.by);
    };
    fetchData();
  }, [params.id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTodos({ id: params.id, title, message, by });
      history.push(`/todos/${params.id}`);
    } catch (e) {
      setError('Whoops. Something went wrong');
    }
  };
  return (
    <div>
      {' '}
      {error && <p>{error}</p>}
      <TodoForm
        {...{
          title,
          setTitle,
          message,
          setMessage,
          by,
          setBy,
          handleSubmit,
        }}
      />
    </div>
  );
}
// why are there dependencies in this fucntion but normally it is left blank. Is it because we are being specific with id? not sure why. or what is dependent on what> The todo is dependent on the inputs?
