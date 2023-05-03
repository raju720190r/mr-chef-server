const express = require("express");
const app = express();
const cors = require('cors')
const port =process.env.PORT || 5050;

const  cData= require('./Data/cData.json');

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Chef is Running')
});

app.get('/cData',(req,res)=>{
    res.send(cData)
})

app.listen(port,()=>{
    console.log(`Chef Server is Running Now Port:${port}`)
});
