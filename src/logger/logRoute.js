const prefixFormat = require('./prefixFormat')

/**
 * logger for route
 *
 * @param {String} method
 * @param {String} path
 * @param {String} payload
 */

module.exports = (method = '', path = '', payload = '') => {
    if (payload != '') console.log(prefixFormat(`method: ${method} > ${path}\n${payload}`))
    else console.log(prefixFormat(`method: ${method} > ${path}`))
}
