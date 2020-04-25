const fs = require('fs')
const path = require('path')
const moment = require('moment-timezone')
const { timezone } = require('../config')
const config = require('../config')

const getDatePath = ({ date = new Date().toUTCString(), file = '' } = {}) => {
  const mDate = timezone ? moment(date).tz(timezone) : moment(date)
  const datePath = mDate.format('/YYYY/MM/DD/HH/mm/')
  const dirPath = path.join(__dirname, config.outputDir, datePath)
  fs.mkdirSync(dirPath, { recursive: true })
  return path.join(dirPath, file)
}

module.exports = getDatePath
