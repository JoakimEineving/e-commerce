const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken);
    req.userData = { email: decodedToken.email, userId: decodedToken._id };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Authentication failed!' });
  }
};

module.exports = auth;