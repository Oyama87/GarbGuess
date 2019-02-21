const router = require('express').Router()

router.use('/garments', require('./garment'))

module.exports = router
