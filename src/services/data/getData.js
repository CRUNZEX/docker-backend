const dataModel = require('../../models/data')

module.exports = async ({ id }) => {
    try {
        const response = await dataModel.findById(id)
        return response
    } catch (err) {
        throw new Error('error: cannot get data')
    }
}