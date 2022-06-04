const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
const { MONGO_URL, MONGO_USER, MONGO_PASS } = process.env

const logger = require('../logger')

exports.connect = () => {
    mongoose.Promise = global.Promise
    mongoose
        .connect(String(MONGO_URL), {
            auth: { authSource: 'admin' },
            user: MONGO_USER,
            pass: MONGO_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            logger.log('backend connect to database')
        })
        .catch((err) => {
            logger.log(`err: ${err}`)
        })
}
