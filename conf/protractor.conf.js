exports.config = {
  chromeDriver: __dirname + '/../drivers/chromedriver.exe',
  geckoDriver: __dirname + '/../drivers/geckodriver.exe',
edgeDriver: __dirname + '/../drivers/msedgedriver.exe',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  params: {
  mywebpage: process.env.URL || 'https://rahulshettyacademy.com/angularpractice/'
}
,

  specs: [process.env.FEATURE ?  __dirname + '/../'+`features/${process.env.FEATURE}.feature` : __dirname + '/../features/practice.feature:8'],

  cucumberOpts: {
    require: [__dirname + '/../stepDefinitions/*.js'],
    format: 'summary',
    tags: process.env.TAG || ''
  },

  capabilities: {
    browserName: process.env.BROWSER || 'chrome', // default to chrome
    
  },

  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  }
};
