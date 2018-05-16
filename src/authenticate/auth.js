const jwt = require('jsonwebtoken');

const secret = "0123456789";


const generateToken = (params = {}) => {
  return jwt.sign(params, secret, {
    expiresIn: 86400,
  });
}


const auth  = {

  login: (user, password) => {
    if(!user || !password)
      return null;

    if (user.password !== password)
      return null;

    return generateToken({ id: user.id });
  },

  authenticate: (req, res, next) => {
    if(!req.headers.token)
      return res.status(401).json({ "error": "Unauthorized" });

    let { token } = req.headers;

    jwt.verify(token, secret, (err, decoded) => {
      if(err) return res.status(401).json({ error: "Unauthorized" });
      return next();
    });
  }

}

module.exports = auth;
