require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/twitter', (req, res) =>{
    res.send("shubham");
})

app.get('/login', (req, res) =>{
    res.send("<h1>Plese login</h1>");
})

app.listen(process.env.PORT , ()=>{
    console.log(`App listining on port ${process.env.PORT}`);
})
