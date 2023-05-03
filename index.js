const express = require("express");
const app = express();
const cors = require('cors')
const port =process.env.PORT || 5050;

const  cData= require('./Data/cData.json');
const req = require("express/lib/request");
const res = require("express/lib/response");

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Chef is Running')
});



app.get('/cData',(req,res)=>{
    res.send(cData)
});

app.get('/cData/:id',(req,res)=>{
  const id=req.params.id;
  const chefDetails =cData.find(n=>n.id === id)
  res.send(chefDetails)
})

app.listen(port,()=>{
    console.log(`Chef Server is Running Now Port:${port}`)
});
