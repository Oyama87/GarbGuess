const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/GarbGuess', {logging: false})

const Garment = db.define('garments', require('./models/Garment'))

module.exports = {
  db,
  Garment
}
