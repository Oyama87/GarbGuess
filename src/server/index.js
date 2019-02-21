const express = require('express')
const app = express()
const volleyball = require('volleyball')
const {db} = require('./db')
const PORT = 8080

app
  .use(volleyball)
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  
app.use('api', require('./api'))

app.use('*', (req,res,next) => {
  res.status(404).send('404 Resource Not Found!')
})

app.use((err,req,res,next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

db.sync()
  .then(() => console.log('DB Synced!'))
  .then(app.listen(PORT, () => console.log(`GarbGuess listening on port ${PORT}!`)))
  .catch(() => console.log('*** Something went wrong! ***'))

  