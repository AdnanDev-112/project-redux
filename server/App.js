const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const mongoose = require('mongoose');

dotenv.config({path:'./config.env'})
//Db Connection 
require('./db/conn')

app.use(express.json());
app.use(cookieParser());


//Router file linked to make Routes
app.use(require('./router/auth'));
const PORT = process.env.PORT










// app.get('/', (req,res)=>{
//     res.send('Hello from the server');
// })
// app.get('/about', (req,res)=>{
//     res.send('About Page');
// })
// app.get('/contact', (req,res)=>{
//     res.send('Contact Page');
// })
// app.get('/login', (req,res)=>{
//     res.send('Login Page');
// })
// app.get('/signup', (req,res)=>{
//     res.send('Sign Up Page');
// })


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})