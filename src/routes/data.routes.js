const express = require('express')
const router = express.Router()

const dataController = require('../controllers/data')
const { dataHandler } = require('../controllers/handlers')

router.post('/data', dataController.postDataController, dataHandler)
router.get('/data/:id', dataController.getDataController, dataHandler)
router.get('/data', (req, res) => {
    res.status(200).json({
        message: 'test'
    })
})

module.exports = router
