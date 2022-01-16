const mongoose = require('mongoose');
const DB = process.env.DATABASE;


mongoose.connect(DB).then(()=>{
    console.log('DB Connection Successfull')
}).catch(err =>{console.log('Connection Failed')})

