const Expense = require('../models/expense');

let expenseController = {};

expenseController.getAll = (req, res) => {
  Expense.find()
    .then( result => res.send( result ))
    .catch( error => res.status(401).send({ "error": "Could not get expenses" }));
};

expenseController.create = (req, res) => {
  Expense.insert(req.body)
    .then(result => res.send( result ))
    .catch(error => res.status(401).send({ "error": "Could not insert a new expense" }));
};

module.exports = expenseController;
