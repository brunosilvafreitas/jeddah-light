module.exports = {
  outputDir: '.output',
  timezone: 'America/Sao_Paulo',
  lighthouse: [
    {
      id: 'magazinelu_home_desk',
      url: 'https://magazineluiza.com.br',
      emulatedFormFactor: 'desktop'
    },
    {
      id: 'magazinelu_home_mobile',
      url: 'https://m.magazineluiza.com.br',
      emulatedFormFactor: 'mobile'
    }
  ],
  minify: {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    continueOnParseError: true,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true
  }
}
