//import express, body-parser
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const json = require('body-parser/lib/types/json');

const accountRoutes = require('./routes/account');
const bankRoutes = require('./routes/bank');



//create express server instance
const server = express();

//middlewares
server.use(bodyParser.json());



//Routes
server.use(accountRoutes);
server.use(bankRoutes)






//connect to database and start server
mongoose.connect('mongodb+srv://JoshuaUser:jNyaqojnIw1UhWWM@cluster0.cpiuyjm.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlparser:true, useUnifiedTopology: true}
)
.then(result =>{

    server.listen(3000, () => console.log('server is ready'))
}).catch(err => console.log(err));