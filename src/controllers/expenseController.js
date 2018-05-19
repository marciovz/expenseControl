const ExpenseModel = require('../models/expense');

let expenseController = {

  create: (req, res) => {
    ExpenseModel.create({ accountId: req.auth.accountId, ...req.body })
      .then(expense => expense.save().then(res.json(expense)) )
      .catch(error => {
        console.log(`expenseModel:  ${error}`);
        res.status(401).json({ error: "Could not insert a new expense" });
    });
  },

  getAll: (req, res) => {
    ExpenseModel.find({ accountId: req.auth.accountId })
      .then(expenses => res.json(expenses))
      .catch(error => res.status(401).send({ error: "Could not get expenses" }));
  },

  getById: (req, res) => {
    ExpenseModel.findOne({ _id: req.params['id'], accountId: req.auth.accountId })
      .then(result => res.json( result ))
      .catch(error => res.status(401).send({ error: "Could not get the expense" }));
  },

  update: (req, res) => {
    ExpenseModel.findOneAndUpdate({ _id: req.params['id'], accountId: req.auth.accountId }, req.body, { new: true })
      .then(expense => res.json( expense ))
      .catch(error => res.status(401).send({ error: "Could not update the expense" }));
  },

  remove: (req, res) => {
    ExpenseModel.findOneAndRemove({ _id: req.params['id'], accountId: req.auth.accountId })
      .then(expense => res.json( expense ))
      .catch(error => res.status(401).send({ error: "Could not delete the expense" }));
  }
};

module.exports = expenseController;
