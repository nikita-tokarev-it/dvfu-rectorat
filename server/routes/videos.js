const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { readDb, writeDb } = require('../utils/db');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

const router = express.Router();
const adminRouter = express.Router();

router.get('/', (req, res) => {
  const db = readDb();
  res.json(db.videos.filter(i => i.published));
});

adminRouter.use(authMiddleware, roleMiddleware(['editor', 'admin']));

adminRouter.get('/', (req, res) => {
  const db = readDb();
  res.json(db.videos);
});

adminRouter.post('/', (req, res) => {
  const db = readDb();
  const now = new Date().toISOString();
  const item = {
    id: uuidv4(),
    title: req.body.title,
    date: req.body.date,
    thumbnail: req.body.thumbnail || '',
    videoUrl: req.body.videoUrl || '',
    published: req.body.published !== undefined ? req.body.published : true,
    createdAt: now,
  };
  db.videos.push(item);
  writeDb(db);
  res.status(201).json(item);
});

adminRouter.put('/:id', (req, res) => {
  const db = readDb();
  const index = db.videos.findIndex(i => i.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Не найдено' });
  db.videos[index] = {
    ...db.videos[index],
    ...req.body,
    id: db.videos[index].id,
    createdAt: db.videos[index].createdAt,
  };
  writeDb(db);
  res.json(db.videos[index]);
});

adminRouter.delete('/:id', (req, res) => {
  const db = readDb();
  const index = db.videos.findIndex(i => i.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Не найдено' });
  db.videos.splice(index, 1);
  writeDb(db);
  res.json({ message: 'Удалено' });
});

module.exports = { router, adminRouter };
