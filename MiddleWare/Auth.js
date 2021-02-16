const jwt_decode = require('jwt-decode');

const auth = (req, res, next) => {
  const token = req.header('Authorization').split('Bearere')[1];
  const user = jwt_decode(token);
  req.body.email = user.email;
  next();
};

module.exports = auth;
