const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expenseController');
const { authenticate } = require('../authenticate/auth');

router.use(authenticate);

router.post('/', expenseController.create);
router.get('/', expenseController.getAll);
router.get('/:id', expenseController.getById);
router.put('/:id', expenseController.update);
router.delete('/:id', expenseController.remove);

module.exports = router;
