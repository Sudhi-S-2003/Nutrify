import jwt from 'jsonwebtoken';

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET_KEY; 

const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.user = decoded; // Attach user info to request
    next();
  });
};

export default authenticate;
