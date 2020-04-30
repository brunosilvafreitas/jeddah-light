const allSettledSync = async (func, jobs) => {
  jobs = jobs instanceof Array ? jobs : [jobs]
  const results = []
  for (let i = 0, count = jobs.length; i < count; i++) {
    const job = jobs[i]
    try {
      const result = await func(job)
      results.push({
        id: job.id,
        status: 'fulfilled',
        value: {
          ...result,
          jobId: job.id
        }
      })
    } catch (e) {
      results.push({
        id: job.id,
        status: 'rejected',
        reason: e
      })
    }
  }
  return results
}

module.exports = allSettledSync
