import { checkError, client } from './client.js';
export default async function getTodos() {
  const resp = await client.from('todosReact').select('*');
  return resp;
}

export async function createTodos() {
  const resp = await client
    .from('todosReact')
    .insert([{ notes: notes, user_id: client.auth.user().id }]);
  return checkError(resp);
}
export async function updateCompleted(id, complete) {
  const resp = await client.from('todosReact').update({ complete }).eq('id', id).single();
  return checkError(resp);
}
