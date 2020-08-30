const express = require('express')
const app = express()

const mongoose = require('mongoose')
const db = mongoose.connection

const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(3000, () => {
  console.log('Express is running on http://localhost:3000')
})