export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstAddToCartButton = '#add-to-cart-sauce-labs-backpack';
    this.cartBadge = '.shopping_cart_badge';
    this.cartIcon = '.shopping_cart_link';
  }

  async addFirstProductToCart() {
    await this.page.click(this.firstAddToCartButton);
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }
}
