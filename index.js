const express = require('express');
const path =  require('path');
const bodyParser = require('body-parser');

const server = express('server');

const loginRequestHandler = (req, res) => {
//    let body = " ";
//    req.on('data' , chunk => {
//        body += chunk;
//    });

//    req.on('end', () => {
//         //parse with regExp

//        console.log(body);
//    })
console.log(req.body)
    res.send('Its working')
}
//middleware definitions
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({extended: false}))

//route
server.post('/login', loginRequestHandler)

server.listen(3000,() => console.log('server is ready'));