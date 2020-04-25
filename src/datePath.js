const path = require('path')
const moment = require('moment-timezone')
const { timezone } = require('../config')
const config = require('../config')

const getDatePath = ({ date = new Date().toUTCString(), file = '' } = {}) => {
  const mDate = timezone ? moment(date).tz(timezone) : moment(date)
  const datePath = mDate.format('/YYYY/MM/DD/HH/mm/')
  return path.join(__dirname, config.outputDir, datePath, file)
}

module.exports = getDatePath
