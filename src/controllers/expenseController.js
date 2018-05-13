const ExpenseModel = require('../models/expense');

let expenseController = {

  create: (req, res) => {
    ExpenseModel.create(req.body)
      .then(expense => expense.save().then(res.json(expense)) )
      .catch(error => {
        console.log(`expenseModel:  ${error}`);
        res.status(401).send({ error: "Could not insert a new expense" });
    });
  },

  getAll: (req, res) => {
    ExpenseModel.find()
      .then(expenses => res.json(expenses))
      .catch(error => res.status(401).send({ error: "Could not get expenses" }));
  },

  getById: (req, res) => {
    ExpenseModel.findById(req.params.id)
      .then(result => res.send( result ))
      .catch(error => res.status(401).send({ error: "Could not get the expense" }));
  },

  update: (req, res) => {
    ExpenseModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(expense => res.send( expense ))
      .catch(error => res.status(401).send({ error: "Could not update the expense" }));
  },

  remove: (req, res) => {
    ExpenseModel.findByIdAndRemove(req.params.id)
      .then(expense => res.send( expense ))
      .catch(error => res.status(401).send({ error: "Could not delete the expense" }));
  }
};

module.exports = expenseController;
