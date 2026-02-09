const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { readDb } = require('../utils/db');
const { JWT_SECRET } = require('../middleware/auth');

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Введите имя пользователя и пароль' });
  }

  const db = readDb();
  const user = db.users.find(u => u.username === username);

  if (!user) {
    return res.status(401).json({ error: 'Неверные учётные данные' });
  }

  const isValid = bcrypt.compareSync(password, user.passwordHash);
  if (!isValid) {
    return res.status(401).json({ error: 'Неверные учётные данные' });
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
});

module.exports = router;
