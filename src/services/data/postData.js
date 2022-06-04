const dataModel = require('../../models/data')

module.exports = async ({ email, username }) => {
    try {
        const payload = {
            email,
            username
        }

        const response = await dataModel.create(payload)
        return response
    } catch (err) {
        throw new Error('error: cannot post data')
    }
}