// import dulu expressnya
const express = require('express');
// instantiate express
const app = express();
// routing index: / menggunakan GET
app.get('/',(req, res) => {
    res.send('Hello World');
});
//tentukan 
app.listen(3000, () =>{
    console.log('server berjalan di port 3000');
});