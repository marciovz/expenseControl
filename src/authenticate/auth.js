const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

const generateToken = (params = {}) => {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: authConfig.expiresToken,
  });
}


const auth  = {

  login: (user, password) => {
    if(!user || !password)
      return null;

    if (user.password !== password)
      return null;

    if(!user.id || !user.accountId)
      return null;

    return generateToken({ userId: user.id, accountId: user.accountId });
  },

  authenticate: (req, res, next) => {
    if(!req.headers.token)
      return res.status(401).json({ "error": "Unauthorized" });

    let { token } = req.headers;

    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if(err) return res.status(401).json({ error: "Unauthorized" });
      req.auth = {};
      req.auth.userId = decoded.userId;
      req.auth.accountId = decoded.accountId;
      return next();
    });
  }
}

module.exports = auth;
