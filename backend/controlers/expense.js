const expenseSchema = require("../models/expenseModel")

exports.addExpense = async(req,res) => {
    const { title, amount, category, description, date } = req.body;
    const numericAmount = Number(amount);
    const expense = expenseSchema({
        title,
        amount: numericAmount,
        category,
        description,
        date
    })

    try{
        if(!title || !category ||!date || !description){
            return res.status(400).json({message:"All fields are required!"})
        }
        if( numericAmount <= 0 || isNaN(numericAmount)){    //isNaN() checks if the amount is not a number
            return res.status(400).json({message: 'Amount must be a positive number'})
        }else{
            await expense.save();
            res.status(200).json({message: "Expense Added!"})
        }
    } catch(error){
        console.error("Error adding expense:", error);
        res.status(500).json({message: "Server Error"})
    }
    console.log(expense);
}


exports.getExpenses = async(req,res) => {
    try{
        const expenses = await expenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch(error){
        res.status(500).json({message: "Server Error!"})
    }
}

exports.deleteExpense = async(req,res) => {
    const {id} = req.params;
    expenseSchema.findByIdAndDelete(id)  //returns deleted expense which is a json object
        .then(() => { //if expense is deleted successfully then,
            res.status(200).json({message: "Expense Deleted!"})
        })
        .catch((error) => {
            res.status(500).json({message: "Server Error!"})
        })
    }
