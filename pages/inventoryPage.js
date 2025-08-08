class InventoryPage {
  constructor(page) {
    this.page         = page;
    this.addButtons   = '.inventory_item .btn_inventory';
    this.cartBadge    = '.shopping_cart_badge';
    this.menuButton   = '#react-burger-menu-btn';
    this.logoutLink   = '#logout_sidebar_link';
  }

  async addFirstItemToCart() {
    await this.page.waitForSelector(this.addButtons);
    const buttons = await this.page.$$(this.addButtons);
    if (buttons.length > 0) {
      await buttons[0].click();
    }
  }

  async getCartBadge() {
    await this.page.waitForSelector(this.cartBadge);
    return await this.page.textContent(this.cartBadge);
  }

  async openMenu() {
    await this.page.waitForSelector(this.menuButton);
    await this.page.click(this.menuButton);
    await this.page.waitForTimeout(500); // Ждем анимацию меню
  }

  async logout() {
    await this.page.waitForSelector(this.logoutLink);
    await this.page.click(this.logoutLink);
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = InventoryPage;