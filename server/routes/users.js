const express = require('express');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { readDb, writeDb } = require('../utils/db');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware, roleMiddleware(['admin']));

router.get('/', (req, res) => {
  const db = readDb();
  const users = db.users.map(({ passwordHash, ...user }) => user);
  res.json(users);
});

router.post('/', (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Имя пользователя и пароль обязательны' });
  }

  const db = readDb();
  if (db.users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'Пользователь с таким именем уже существует' });
  }

  const newUser = {
    id: uuidv4(),
    username,
    email: email || '',
    passwordHash: bcrypt.hashSync(password, 10),
    role: role || 'editor',
    createdAt: new Date().toISOString(),
  };

  db.users.push(newUser);
  writeDb(db);

  const { passwordHash, ...userResponse } = newUser;
  res.status(201).json(userResponse);
});

router.put('/:id', (req, res) => {
  const db = readDb();
  const index = db.users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Пользователь не найден' });

  const { username, email, role, password } = req.body;

  if (username) db.users[index].username = username;
  if (email !== undefined) db.users[index].email = email;
  if (role) db.users[index].role = role;
  if (password) db.users[index].passwordHash = bcrypt.hashSync(password, 10);

  writeDb(db);

  const { passwordHash, ...userResponse } = db.users[index];
  res.json(userResponse);
});

router.delete('/:id', (req, res) => {
  const db = readDb();

  if (req.params.id === req.user.userId) {
    return res.status(400).json({ error: 'Нельзя удалить самого себя' });
  }

  const index = db.users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Пользователь не найден' });

  db.users.splice(index, 1);
  writeDb(db);
  res.json({ message: 'Пользователь удалён' });
});

module.exports = router;
