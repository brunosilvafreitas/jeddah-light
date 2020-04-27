const { minify } = require('html-minifier')
const config = require('../config')
const multiJob = require('./multiJob')
const lighthouse = require('./lighthouse')
const writeFile = require('./writeFile')
const datePath = require('./datePath')
const lighthouseSetup = require('./lighthouseSetup')
const buildScore = require('./buildScore')

const lighthouseConfig = lighthouseSetup(config.lighthouse)
multiJob(lighthouse, lighthouseConfig)
  .then(async results => {
    await Promise.all(results.map((res, resIndex) => {
      if (res.status === 'fulfilled') {
        return Promise.all([
          writeFile(
            datePath({ file: `${res.value.jobId}.html` }),
            minify(res.value.report[0]), 'utf-8'
          ),
          writeFile(
            datePath({ file: `${res.value.jobId}_score.json` }),
            JSON.stringify(buildScore(res.value.lhr)), 'utf-8'
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
