require('dotenv').config();
const express = require('express');


const app = express();
const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`)
});