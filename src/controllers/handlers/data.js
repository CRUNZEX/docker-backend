const { resHeader } = require('../../services/response')

module.exports = (data, req, res, next) => {
    res = resHeader(res)

    if (data.status) {
        return res.status(200).json({
            method: req.method,
            status: true,
            message: 'success',
            payload: data.payload,
        })
    }

    return res.status(data.code ? data.code : 400).json({
        method: req.method,
        status: false,
        message: data.message,
    })
}
