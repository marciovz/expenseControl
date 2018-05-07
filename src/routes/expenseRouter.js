const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expenseController');

router.get('/', expenseController.getAll);
router.post('/', expenseController.create);

module.exports = router;
