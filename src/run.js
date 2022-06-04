const http = require('http')
const app = require('./app')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const server = http.createServer(app)
const { PORT } = process.env

server.listen(PORT, () => console.log(`server start at port ${PORT}`))
