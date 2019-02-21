const Sequelize = require('sequelize')

module.exports = {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  region: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  warmth: {
    type: Sequelize.STRING,
    allowNull: false
  },
  formality: {
    type: Sequelize.STRING
  },
  resistance: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
}
