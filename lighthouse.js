const { URL } = require('url')
const puppeteer = require('puppeteer')
const lighthouse = require('lighthouse')

const config = {
  output: ['html', 'json'],
  emulatedFormFactor: 'desktop'
}

const launchLighthouse = async (url) => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
  config.port = new URL(browser.wsEndpoint()).port
  const lhr = await lighthouse(url, config)
  await browser.close()
  return lhr
}

// use results.lhr for the JS-consumable output
// https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
// use results.report for the HTML/JSON/CSV output as a string
// use results.artifacts for the trace/screenshots/other specific case you need (rarer)

launchLighthouse('https://magazineluiza.com.br/')
  .then(res => console.log(res.report[0]))
  .catch(e => console.error(e))
