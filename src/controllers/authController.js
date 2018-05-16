const { login } = require('../authenticate/auth');
const User = require('../models/user');


const authController = {

  login: (req, res) => {
    let { email, password } = req.body;
    if(!email || !password)
      return res.status(401).json({ "error": "bad requisition" });

    User.findOne({ "email": email })
      .then(user => {
        if(!user)
          return res.status(401).json({ "error": "User not found" });

        let token = login(user, password);

        if(!token)
          return res.status(401).json({ "error": "Wrong password" });

        return res.json({ "token": token });

      })
      .catch(err =>  res.status(401).json({ "error": "Authenticate error" }));
  },

  register: (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password)
      return res.status(401).json({ "error": "bad requisition" });

    User.findOne({ email })
      .then(user => {
        if(user)
          return res.status(401).json({ "error": "User already registered" });

        new User({ name, email, password })
          .save()
          .then(user => {
            user.password = undefined;
            return res.json(user);
          })
          .catch(err => res.status(401).json({ "error": "Could not create a new user" }));
      })
      .catch(err => res.status(401).json({ "error": "User verification" }));
  }

};

module.exports = authController;
