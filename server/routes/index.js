const express = require('express')
const chirpsRouter = require('./chirps')
const router = express.Router()
// const app = express()

//app.use will not work - throws "cannot GET error"
router.use('/chirps', chirpsRouter)

module.exports = router