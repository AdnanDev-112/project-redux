const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express();

const mongoose = require('mongoose');

dotenv.config({ path: './config.env' })
//Db Connection 
require('./db/conn')

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));


//Router file linked to make Routes
app.use(require('./router/auth'));
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})