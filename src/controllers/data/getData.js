const { getDataService } = require('../../services/data')

module.exports = async (req, res, next) => {
    try {
        const response = await getDataService(req.params)
        next(response)
    } catch (err) {
        next(err)
    }
}