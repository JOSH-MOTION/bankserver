//import express, body-parser
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const json = require('body-parser/lib/types/json');

const {listBankController,updateBankController,createBankController,deleteBankController} = require ('./controllers');


//create express server instance
const server = express();

//middlewares
server.use(bodyParser.json());



//routes
// view bank - get method
server.get('/bank/:id?', listBankController)
//create bank - post method
server.post('/bank', createBankController)
//update bank - put method
// server.put('/bank', updateBankController)
//delete bank - delete method
// server.delete('/bank', deleteBankController);






//connect to database and start server
mongoose.connect('mongodb+srv://JoshuaUser:jNyaqojnIw1UhWWM@cluster0.cpiuyjm.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlparser:true, useUnifiedTopology: true}
)
.then(result =>{

    server.listen(3000, () => console.log('server is ready'))
}).catch(err => console.log(err));