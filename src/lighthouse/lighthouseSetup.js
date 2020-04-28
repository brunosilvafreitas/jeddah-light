const lighthouseSetup = jobs => {
  return jobs.map(job => ({
    ...job,
    output: ['html']
  }))
}

module.exports = lighthouseSetup
