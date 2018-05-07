let Expense = {};
let data = [];

// return all expenses
Expense.find = async() => {
  return await data;
};

// insert a new expense
Expense.insert = async(newExpense) => {
  await data.push(newExpense);
  return newExpense;
};

module.exports = Expense;
