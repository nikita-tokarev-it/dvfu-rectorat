const bcrypt = require('bcryptjs');
const { readDb } = require('../../lib/db');
const { createToken } = require('../../lib/auth');

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

  const token = createToken({ userId: user.id, role: user.role });

  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
};
