const express = require('express'); //importing express
const cors=require('cors'); //importing cors
const db = require('./db/db');    //importing db ie mongodb connection
const {readdirSync} = require('fs');  //importing fs to read all files in routes folder
const app=express()  //creating express app

require('dotenv').config();  //importing dot.env to use environment variables
const PORT=process.env.PORT  //5000

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/'+ route)))

/*
app.get('/', (req ,res) => {
    res.send("Hello world")
}) //to check if server is running
 */

//to start server after connecting to database
const server = () => {
    db();  //connect to database
    app.listen(PORT,() => {
        console.log("You are listening to port: ",PORT);
    })
} 
server();