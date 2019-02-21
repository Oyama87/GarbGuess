const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/GarbGuess')

const Garment = db.define('garments', require('./models/Garment'))

module.exports = {
  db,
  Garment
}
