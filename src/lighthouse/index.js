const lighthouseSetup = require('./lighthouseSetup')
const lighthouse = require('./lighthouse')
const allSettledSync = require('../utils/allSettledSync')

module.exports = async (config) => {
  const setup = lighthouseSetup(config)
  return allSettledSync(lighthouse, setup)
}
