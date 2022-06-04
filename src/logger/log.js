const prefixFormat = require('./prefixFormat')

/**
 * native console.log
 *
 * @param {String} str
 */

module.exports = (str = '') => {
    console.log(prefixFormat(str))
}
