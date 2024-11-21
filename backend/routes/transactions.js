
const {addIncome, getIncomes, deleteIncome} = require('../controlers/income');   //importing addIncome function from income.js in controlers
const {addExpense, getExpenses, deleteExpense} = require('../controlers/expense');

const router=require('express').Router()  //importing express router

router.post('/add-income',addIncome); 
router.get('/get-incomes', getIncomes);
router.delete('/delete-income/:id', deleteIncome)
router.post('/add-expense',addExpense); 
router.get('/get-expenses', getExpenses);
router.delete('/delete-expense/:id', deleteExpense)

module.exports = router; //exporting router to use in app.js
