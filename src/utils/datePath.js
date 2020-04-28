const path = require('path')
const moment = require('moment-timezone')
const { timezone, outputDir } = require('../../config')

const getDatePath = ({ date = new Date().toUTCString(), file = '' } = {}) => {
  const mDate = timezone ? moment(date).tz(timezone) : moment(date)
  const datePath = mDate.format('/YYYY/MM/DD/HH/mm/')
  return path.join(path.dirname(require.main.filename), '../', outputDir, datePath, file)
}

module.exports = getDatePath
