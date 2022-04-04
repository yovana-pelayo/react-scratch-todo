import { checkError, client } from './client.js';
export default async function getTodos() {
  const resp = await client.from('todosReact').select('*');
  return resp;
}
export async function getTodosById(id) {
  const resp = await client.from('todosReact').select('*').match({ id }).single();
  return checkError(resp);
}
export async function createTodos(todo) {
  const resp = await client.from('todosReact').insert(todo);
  return checkError(resp);
}
