import { client, checkError } from './client';

export async function getTodos() {
  const resp = await client.from('todos_react').select('*');
  return checkError(resp);
}

export async function createTodos(notes) {
  const resp = await client
    .from('todos_react')
    .insert([{ notes: notes, user_id: client.auth.user().id }]);
  return checkError(resp);
}
export async function updateCompleted(id, complete) {
  const resp = await client.from('todos_react').update({ complete }).eq('id', id).single();
  return checkError(resp);
}
// export async function deleteNote() {
//   const resp = await client.from('todos_react').delete();
//   return checkError(resp);
// }
