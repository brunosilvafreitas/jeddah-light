const multiJob = async (func, jobs) => {
  jobs = jobs instanceof Array ? jobs : [jobs]
  const results = []
  for (let i = 0, count = jobs.length; i < count; i++) {
    try {
      const job = jobs[i]
      const result = await func(job)
      results.push({
        status: 'fulfilled',
        value: {
          ...result,
          jobId: job.id
        }
      })
    } catch (e) {
      results.push({
        status: 'rejected',
        reason: e
      })
    }
  }
  return results
}

module.exports = multiJob
