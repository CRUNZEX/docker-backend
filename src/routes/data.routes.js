const express = require('express')
const router = express.Router()

const dataController = require('../controllers/data')
const { dataHandler } = require('../controllers/handlers')

router.post('/data', dataController.postDataController, dataHandler)
router.get('/data/:id', dataController.getDataController, dataHandler)

module.exports = router
