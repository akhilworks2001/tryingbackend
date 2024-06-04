require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/instagram', (req, res) => {
  res.send('akhil01com')  
});

app.get('/login', (req, res) => {
    res.send('<h1>Please login at instagram<h1/>')
});

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai or Code</h2>")
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});