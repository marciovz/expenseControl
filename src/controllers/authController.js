const { login } = require('../authenticate/auth');
const AccountModel = require('../models/account');
const UserModel = require('../models/user');


const authController = {

  login: (req, res) => {
    let { email, password } = req.body;
    if(!email || !password)
      return res.status(401).json({ "error": "bad requisition" });

    UserModel.findOne({ "email": email })
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
      return res.status(401).json({ "registerError": "bad requisition" });

    UserModel.findOne({ email })
      .then(user => {
        if(user)
          throw new Error("User already registered");

        return new AccountModel()
          .save()
          .then(account => {
            return account;
          })
          .catch(err => {
            throw new Error("Could not create a new account");
          });
      })
      .then(account => {
        return new UserModel({ accountId: account.id, name, email, password })
          .save()
          .then(user => {
            let result = {};
            result.account = account;
            result.user = user;
            return result;
          })
          .catch(err => {
            throw new Error("Could not create a new user");
          });
      })
      .then(result => {
        let {user, account} = result;
        AccountModel.findByIdAndUpdate(account.id, { userId: user.id })
          .then(account => {
            user.accountId = undefined;
            user.password = undefined;
            return res.json(user);
          })
          .catch(err => {
            throw new Error("Could not update a new account");
          });
      })
      .catch(err =>{
        console.log(err);
        res.status(401).json({ "registerError": err.message });
      });
  }
};

module.exports = authController;
