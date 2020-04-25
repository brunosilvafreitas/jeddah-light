const config = require('../config')
const multiJob = require('./multiJob')
const lighthouse = require('./lighthouse')
const writeFile = require('./writeFile')
const datePath = require('./datePath')

multiJob(lighthouse, config.lighthouse)
  .then(async results => {
    await Promise.all(results.map((res, resIndex) => {
      if (res.status === 'fulfilled') {
        return Promise.all(
          config.lighthouse[resIndex].output.map((ext, extIndex) =>
            writeFile(
              datePath({ file: `${res.value.jobId}.${ext}` }),
              res.value.report[extIndex], 'utf-8'
            )
          )
        )
      } else {
        console.error(`${res.status} with error`, res.reason)
      }
    }))
    console.log('done')
    process.exit(0)
  })
  .catch(e => console.error(e))
