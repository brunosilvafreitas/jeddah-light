const { URL } = require('url')
const puppeteer = require('puppeteer')
const lighthouse = require('lighthouse')

const launchLighthouse = async ({ url, ...params }) => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
  const port = new URL(browser.wsEndpoint()).port
  const result = await lighthouse(url, { ...params, port })
  await browser.close()

  return result
}

// use results.lhr for the JS-consumable output
// https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
// use results.report for the HTML/JSON/CSV output as a string
// use results.artifacts for the trace/screenshots/other specific case you need (rarer)

module.exports = launchLighthouse
