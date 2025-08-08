class CartPage {
  constructor(page) {
    this.page    = page;
    this.cartUrl = 'https://www.saucedemo.com/cart.html';
  }

  async goto() {
    await this.page.goto(this.cartUrl);
  }

  async getItemsCount() {
    return (await this.page.$$('.cart_item')).length;
  }
}

module.exports = CartPage;