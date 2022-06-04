const { postDataService } = require('../../services/data')

module.exports = async (req, res, next) => {
    try {
        const response = await postDataService(req.body)
        next(response)
    } catch (err) {
        next(err)
    }
}