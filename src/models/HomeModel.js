const mongoose = require('mongoose')
const HomeSchema = new Mongose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descrição: String
})

const HomeModel = mongoose.model('Home', HomeSchema)

module.exports = HomeModel
