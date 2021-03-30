const express = require('express')
const app = express()
const cors = require('cors')
const iecho = require('./routes/iecho')

app.use(cors())

app.get('/iecho', iecho)

module.exports = app
