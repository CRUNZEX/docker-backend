const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
require('./config/database').connect()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'))

require('./routes').routes(app)

module.exports = app