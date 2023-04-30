const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const uri = process.env.ATLAST_URI;

mongoose.connect(uri, {useNewUulParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('MongoDB database connected successfully')
})



app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
})

