const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { readDb, writeDb } = require('../utils/db');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

const router = express.Router();
const adminRouter = express.Router();

router.get('/', (req, res) => {
  const db = readDb();
  res.json(db.documents.filter(i => i.published));
});

adminRouter.use(authMiddleware, roleMiddleware(['editor', 'admin']));

adminRouter.get('/', (req, res) => {
  const db = readDb();
  res.json(db.documents);
});

adminRouter.post('/', (req, res) => {
  const db = readDb();
  const now = new Date().toISOString();
  const item = {
    id: uuidv4(),
    category: req.body.category,
    title: req.body.title,
    file: req.body.file || '',
    date: req.body.date,
    published: req.body.published !== undefined ? req.body.published : true,
    createdAt: now,
    updatedAt: now,
  };
  db.documents.push(item);
  writeDb(db);
  res.status(201).json(item);
});

adminRouter.put('/:id', (req, res) => {
  const db = readDb();
  const index = db.documents.findIndex(i => i.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Не найдено' });
  db.documents[index] = {
    ...db.documents[index],
    ...req.body,
    id: db.documents[index].id,
    createdAt: db.documents[index].createdAt,
    updatedAt: new Date().toISOString(),
  };
  writeDb(db);
  res.json(db.documents[index]);
});

adminRouter.delete('/:id', (req, res) => {
  const db = readDb();
  const index = db.documents.findIndex(i => i.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Не найдено' });
  db.documents.splice(index, 1);
  writeDb(db);
  res.json({ message: 'Удалено' });
});

module.exports = { router, adminRouter };
