const { minify } = require('html-minifier')
const writeFile = require('../utils/writeFile')
const datePath = require('../utils/datePath')
const buildScore = require('./buildScore')
const { minify: minifyConfig } = require('../../config')

const jobReport = async (job, date) => {
  const htmlReportPath = datePath({ file: `${job.jobId}.html`, date })
  const htmlReport = minify(job.report[0], minifyConfig)

  const jsonReportPath = datePath({ file: `${job.jobId}_score.json`, date })
  const jsonReport = buildScore({ ...job, htmlReportPath })

  await Promise.all([
    writeFile(
      htmlReportPath,
      htmlReport, 'utf-8'
    ),
    writeFile(
      jsonReportPath,
      JSON.stringify(jsonReport), 'utf-8'
    )
  ])
    .catch(e => {
      console.error(e)
    })

  return jobReport
}

module.exports = jobReport
