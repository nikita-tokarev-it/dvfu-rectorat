const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dvfu-rectorat-secret-key-2024';

function verifyToken(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

function createToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

function checkRole(user, allowedRoles) {
  return user && allowedRoles.includes(user.role);
}

module.exports = { verifyToken, createToken, checkRole, JWT_SECRET };
