const moment = require('moment-timezone')
const lighthouse = require('./lighthouse')
const reports = require('./reports')
const {
  lighthouse: lighthouseConfig,
  timezone
} = require('../config')

const runDate = (timezone ? moment().tz(timezone) : moment()).format()
lighthouse(lighthouseConfig)
  .then(results =>
    reports(results, runDate)
  )
  .then(() => {
    console.log('done')
    process.exit(0)
  })
  .catch(e => console.error(e))
