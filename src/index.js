const { minify } = require('html-minifier')
const config = require('../config')
const writeFile = require('./utils/writeFile')
const datePath = require('./utils/datePath')
const lighthouse = require('./lighthouse')
const buildScore = require('./lighthouse/buildScore')

lighthouse(config.lighthouse)
  .then(async results => {
    await Promise.all(results.map(res => {
      if (res.status === 'fulfilled') {
        const reportPath = datePath({ file: `${res.value.jobId}.html` })
        return Promise.all([
          writeFile(
            reportPath,
            minify(res.value.report[0], config.minify), 'utf-8'
          ),
          writeFile(
            datePath({ file: `${res.value.jobId}_score.json` }),
            JSON.stringify(buildScore({ ...res.value, reportPath })), 'utf-8'
          )
        ])
      } else {
        console.error(`${res.status} with error`, res.reason)
      }
    }))
    console.log('done')
    process.exit(0)
  })
  .catch(e => console.error(e))
