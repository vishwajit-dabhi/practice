const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,res)=>{
    res.send("im listening")
})

app.listen(3000)