const { element, by } = require('protractor');

class ShopPage {
  constructor() {
    this.checkout = element(by.id('searchInput'));
    this.addToCart=(productName) => element(by.xpath( `//h4//a[text()="${productName}"]/ancestor::div[@class="card h-100"]//button`));
    this.category = element(by.css('.results-container'));
  }
async clickOnCheckout(){
    await this.checkout.click();
}
async clickOnAddtoCart(ankita){
    await this.addToCart(ankita.productName).click();
}
  
}

module.exports = new ShopPage(); // ✅ Exporting instance directly
