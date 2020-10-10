const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // get the token from the Header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(404).json({ msg: 'No token, authorization denied' });
  }

  // if token exsits then verify
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
