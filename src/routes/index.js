const logger = require('../logger')

const dataRoutes = require('./data.routes')

exports.routes = (app) => {
    const path = '/api'

    // logger
    app.use((req, res, next) => {
        logger.logRoute(req.method, req.url)

        req.reqestTime = Date.now()
        return next()
    })

    app.use(path, dataRoutes)
}