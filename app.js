const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('this is restaurantList')
})


app.listen(3000, () => {
  console.log('Express is running on http://localhost:3000')
})