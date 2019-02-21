const router = require('express').Router()
const {Garment} = require('../db')

router.get('/', async (req,res,next) => {
  try {
    const garments = await Garment.findAll()
    console.log(garments)
    res.status(200).json(garments)
  }
  catch(err) {
    console.error(err)
    next(err)
  }
})

router.post('/', async (req,res,next) => {
  const {
    name,
    description,
    region,
    color,
    warmth,
    formality,
    resistance,
    imageUrl
  } = req.body
  
  try {
    const newGarment = await Garment.create({
      name,
      description,
      region,
      color,
      warmth,
      formality,
      resistance,
      imageUrl
    })
    res.json(newGarment)
  }
  catch(err) {
    console.log(err)
    next(err)
  }
})

module.exports = router
