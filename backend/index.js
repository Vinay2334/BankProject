const connectToMongo= require ('./db')
const express = require('express')
var cors = require('cors')
connectToMongo() 
const path = require('path')

const app = express()
app.use(cors())
const port=process.env.PORT || 3000

app.use(express.json());
app.use(express.static(path.join(__dirname + "/build")))


// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world now is time to de')
// })

app.use('/api/auth',require('./routes/auth'))
app.use('/api/transactions',require('./routes/money'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, _=>{
  console.log (`Example app listening to ${port}`)
})
