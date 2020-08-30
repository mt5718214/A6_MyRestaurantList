const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  location: {
    type: String
  },
  phone: {
    type: Number
  },
  description: {
    type: String
  }
})


module.exports = mongoose.model('Restaurant', restaurantSchema)