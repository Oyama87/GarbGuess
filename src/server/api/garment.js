const router = require('express').Router()
const Garment = require('../db')

router.get('/', async (req,res,next) => {
  try {
    const garments = await Garment.findAll()
    res.status(200).json(garments)
  }
  catch(err) {
    console.error(err)
    next(err)
  }
})

module.exports = router
