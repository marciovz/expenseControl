const jwt = require('jsonwebtoken');

const secret = "0123456789";

const generateToken = (params = {}) => {
  return jwt.sign(params, secret, {
    expiresIn: 3600,  //1horas
  });
}


const auth  = {

  login: (user, password) => {
    if(!user || !password)
      return null;

    if (user.password !== password)
      return null;

    return generateToken({ id: user.id });
  }

}

module.exports = auth;
