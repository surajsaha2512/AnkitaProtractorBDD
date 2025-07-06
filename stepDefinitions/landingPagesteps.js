// These are MUST for Cucumber to understand step definitions
const { Given, When, Then,And,setDefaultTimeout } = require('cucumber');

// Required to control the browser and interact with elements
const { browser, element, by, protractor } = require('protractor');
let arr=[];
// Chai is used for assertions like expect()
const chai = require('chai');
const expect = chai.expect;

setDefaultTimeout(60000);
Given("user is on ford parts homepage", async function () {
  await browser.get(browser.params.mywebpage);
});
Given("user is on google parts homepage", async function () {
  await browser.get(browser.params.mywebpage);
});

Then("user wait for the promotion popup to be visible", async function () {
  //await browser.sleep(10000);
  const POPup = element(by.xpath("//div[@class='contentRecommendationWidget']//span[@class='heading']"));
  const EC = protractor.ExpectedConditions;
  await browser.wait(EC.visibilityOf(POPup),7000);
  expect(await POPup.isPresent()).to.be.true;

});
Then("user close the promotion popup", async function(){
  const closebutton= element(by.id("noThanksButton"));
  // console.log(closebutton)
  await closebutton.click();
  expect(await browser.getCurrentUrl()).to.equal("https://parts.ford.com/")
  await browser.sleep(10000);

});
Then("user clicks on {string} country", async function(country){
  const closebutton= element(by.xpath(`//ul[@id="ui-id-1"]//li//div[text()="${country}"]`));
    const EC = protractor.ExpectedConditions;
  await browser.wait(EC.visibilityOf(closebutton),7000);

  await closebutton.click()
  await browser.sleep(10000);

});
Then("user enters {string} value", async function(searchvalue){
  await element(by.id(`autocomplete`)).sendKeys(searchvalue);
  

});
Then("user clicks on the search field", async function(){
  await element(by.id(`autocomplete`)).click();
});








// When('I enter valid credentials', {timeout:60000},async function () {
//   const EC = protractor.ExpectedConditions;

//   const usernameField = element(by.name('username'));
//   const passwordField = element(by.name('password'));
//   const loginButton = element(by.css('button[type="submit"]'));

//   // Wait for username field to be visible
//   await browser.wait(EC.visibilityOf(usernameField), 30000);

//   await usernameField.sendKeys('Admin');
//   await passwordField.sendKeys('admin123');
//   await loginButton.click();
// });


// Then('I should be redirected to the dashboard', async function () {
//   const EC = protractor.ExpectedConditions;
//   const dashboardHeader = element(by.cssContainingText('h6', 'Dashboard'));
//   await browser.wait(EC.visibilityOf(dashboardHeader), 5000);
//   const isPresent = await dashboardHeader.isPresent();
//   expect(isPresent).to.be.true;
// });
