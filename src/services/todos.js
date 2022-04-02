import { client } from './client.js';
export default async function getTodos() {
  const resp = await client.from('todosReact').select('*');
  return resp;
}
