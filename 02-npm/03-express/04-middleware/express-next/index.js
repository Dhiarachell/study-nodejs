//require dotenv
require('dotenv').config();

//import express
const express = require('express');
//import body-parse
const bodyParser = require('body-parser');

//import modul headers 
const headers = require('./middlewares/headers');
//import module body

//instantiate express
const app = express();

//middleware kedua nampilin req dari headers

//middleware disini
//middleware pertama itu bodyParser
//untuk yang umum
app.use(bodyParser.json(), headers);

//middleware nya hanya berlaku pada method post di index
//tampilin isi dari req body menggunakan middleware body
//tampilkan data req body ke client
app.post("/", bodyParser.urlencoded, body,(req, res, next) => {
    //untuk mengirimkan data request body ke client
    req.send(req.body);

});

//middleware buat selain methot post
//untuk di index
app.use("/",(req, res, next) => {
    res.send(req.headers);
     
});

//port
app.listen(process.env.PORT, ()=> {
    console.log(`Server berjalan di port ${process.env.PORT}`);
});