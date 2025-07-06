// These are MUST for Cucumber to understand step definitions
const { Given, When, Then, And, setDefaultTimeout } = require("cucumber");

// Required to control the browser and interact with elements
const { browser, element, by, protractor } = require("protractor");
let arr = [];
// Chai is used for assertions like expect()
const chai = require("chai");
const expect = chai.expect;
const searchPageobj=require('C:/Users/Ankita/protractor-cucumber-demo/pages/ShopPage');

setDefaultTimeout(60000);
Given("user is on Login Page", async function () {
  await browser.get(browser.params.mywebpage);
});
Then("user fills all details", async function () {
  await element(
    by.xpath('//div[@class="form-group"]//input[@name="name"]')
  ).sendKeys("Mystudents");
  await element(by.xpath('//input[@name="email"]')).sendKeys(
    "mystudents@gmail.com"
  );
  await element(by.id("exampleInputPassword1")).sendKeys("password2");
  await element(by.xpath('//input[@id="exampleCheck1"]')).click();
  await element(
    by.xpath(
      '//Select[@id="exampleFormControlSelect1"]//option[text()="Female"]'
    )
  ).click();
  await element(by.xpath('//input[@id="inlineRadio1"]')).click();
  await element(by.xpath('//input[@name="bday"]')).sendKeys("28/01/2000");
});
Then("user clicks on submit button", async function () {
  await element(by.buttonText("Submit")).click();
});
Then("user checks form is submitted successfully", async function () {
  const text = await element(
    by.xpath('//div[contains(@class, "alert-success")]')
  ).getText();
  console.log(text);
  expect(await text).to.contain(
    "Success! The Form has been submitted successfully!."
  );
});

Given("user is on shop page", async function () {
  await element(by.linkText("Shop")).click();
  ////a[@class="nav-link" and text()="Shop"]
});
Then("user selects products", async function (data) {
  let products = data.hashes();
  for (const product of products) {
    console.log(product)
    await searchPageobj.clickOnAddtoCart(product);
    await browser.sleep(10000);
  }
});
