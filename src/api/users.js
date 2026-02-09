import client from './client';

export async function getUsers() {
  const response = await client.get('/admin/users');
  return response.data;
}

export async function createUser(data) {
  const response = await client.post('/admin/users', data);
  return response.data;
}

export async function updateUser(id, data) {
  const response = await client.put(`/admin/users?id=${id}`, data);
  return response.data;
}

export async function deleteUser(id) {
  const response = await client.delete(`/admin/users?id=${id}`);
  return response.data;
}
