//import express, body-parser
const express = require('express')
const bodyParser = require('body-parser');
const json = require('body-parser/lib/types/json');

const {listBankController,updateBankController,createBankController,deleteBankController} = require ('./controllers')


//create express server instance
const server = express();

//middlewares
server.use(bodyParser.json());



//routes
// view bank - get method
server.get('/bank', listBankController)
//create bank - post method
server.post('/bank', createBankController)
//update bank - put method
server.put('/bank', updateBankController)
//delete bank - delete method
server.delete('/bank', deleteBankController)






//start server
server.listen(3000, () => console.log('server is ready'))
