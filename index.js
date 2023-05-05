const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const chefs = require('./Data/chefs.json');
const blogs = require('./Data/blog.json');
app.get('/', (req, res) => {
    res.json({ message: 'Hello Server is Running' });
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedData = chefs.find(n => n.id == id);
    res.send(selectedData);
});
app.get('/blogs',(req,res)=>{
    res.send(blogs)
})

app.listen(port, () => {
    console.log(`Server is runnig port: ${port}`);
});