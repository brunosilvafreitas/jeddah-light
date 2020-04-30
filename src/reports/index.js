const jobReport = require('./jobReport')

const reports = (data, reportDate) => {
  return Promise.all(data.map(res => {
    if (res.status === 'fulfilled') {
      return jobReport(res.value, reportDate)
    } else {
      console.error(`${res.id} ${res.status} with error`, res.reason)
    }
  }))
}

module.exports = reports
