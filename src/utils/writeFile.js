const fs = require('fs')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const mkdir = promisify(fs.mkdir)

const write = async (file, data, ...args) => {
  const dir = file.replace(/\/+\w*.\w*$/, '')
  await mkdir(dir, { recursive: true })
  return writeFile(file, data, ...args)
}

module.exports = write
