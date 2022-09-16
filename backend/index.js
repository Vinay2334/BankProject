const connectToMongo= require ('./db')
const express = require('express')
connectToMongo()


const app = express()
const port=3000

app.use(express.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world now is time')
})

app.use('/api/auth',require('./routes/auth'))
app.use('/api/transactions',require('./routes/money'))


app.listen(port, ()=>{
  console.log (`Example app listening to http://localhost:${port}`)
})