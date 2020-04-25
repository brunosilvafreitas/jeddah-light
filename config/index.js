module.exports = {
  outputDir: '../.output',
  timezone: 'America/Sao_Paulo',
  lighthouse: [
    {
      id: 'magazinelu_home_desk',
      url: 'https://magazineluiza.com.br',
      output: ['html', 'json'],
      emulatedFormFactor: 'desktop'
    },
    {
      id: 'magazinelu_home_mobile',
      url: 'https://m.magazineluiza.com.br',
      output: ['html', 'json'],
      emulatedFormFactor: 'mobile'
    }
  ]
}
