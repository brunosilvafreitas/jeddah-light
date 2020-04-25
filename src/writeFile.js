const fs = require('fs')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)

module.exports = writeFile
