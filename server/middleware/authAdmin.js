const jwt = require('jsonwebtoken');

const authAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken);
    req.userData = { email: decodedToken.email, userId: decodedToken._id, isAdmin: decodedToken.isAdmin };
    console.log(req.userData);
    if (req.userData.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: 'Authentication failed!' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed!' });
  }
};

module.exports = authAdmin;