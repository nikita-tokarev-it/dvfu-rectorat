import client from './client';

// Press Releases
export async function getPressReleases() {
  const response = await client.get('/press-releases');
  return response.data;
}

export async function getAdminPressReleases() {
  const response = await client.get('/admin/press-releases');
  return response.data;
}

export async function createPressRelease(data) {
  const response = await client.post('/admin/press-releases', data);
  return response.data;
}

export async function updatePressRelease(id, data) {
  const response = await client.put(`/admin/press-releases?id=${id}`, data);
  return response.data;
}

export async function deletePressRelease(id) {
  const response = await client.delete(`/admin/press-releases?id=${id}`);
  return response.data;
}

// Announcements
export async function getAnnouncements() {
  const response = await client.get('/announcements');
  return response.data;
}

export async function getAdminAnnouncements() {
  const response = await client.get('/admin/announcements');
  return response.data;
}

export async function createAnnouncement(data) {
  const response = await client.post('/admin/announcements', data);
  return response.data;
}

export async function updateAnnouncement(id, data) {
  const response = await client.put(`/admin/announcements?id=${id}`, data);
  return response.data;
}

export async function deleteAnnouncement(id) {
  const response = await client.delete(`/admin/announcements?id=${id}`);
  return response.data;
}

// Photos
export async function getPhotos() {
  const response = await client.get('/photos');
  return response.data;
}

export async function getAdminPhotos() {
  const response = await client.get('/admin/photos');
  return response.data;
}

export async function createPhoto(data) {
  const response = await client.post('/admin/photos', data);
  return response.data;
}

export async function updatePhoto(id, data) {
  const response = await client.put(`/admin/photos?id=${id}`, data);
  return response.data;
}

export async function deletePhoto(id) {
  const response = await client.delete(`/admin/photos?id=${id}`);
  return response.data;
}

// Videos
export async function getVideos() {
  const response = await client.get('/videos');
  return response.data;
}

export async function getAdminVideos() {
  const response = await client.get('/admin/videos');
  return response.data;
}

export async function createVideo(data) {
  const response = await client.post('/admin/videos', data);
  return response.data;
}

export async function updateVideo(id, data) {
  const response = await client.put(`/admin/videos?id=${id}`, data);
  return response.data;
}

export async function deleteVideo(id) {
  const response = await client.delete(`/admin/videos?id=${id}`);
  return response.data;
}
