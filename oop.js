class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  class Item {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
    getTotal() {
      return this.product.price * this.quantity;
    }
  }
  class ShoppingCart {
    constructor() {
      this.items = []; 
    }
    addItem(product, quantity) {
      let item = new Item(product, quantity);
      this.items.push(item);
    }

    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    TotalPrice() {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i].getTotal();
      }
      return total;
    }
  
    displayItems() {
      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i];
        console.log(`${item.product.name} - Quantity: ${item.quantity} - Price: $${item.product.price} - Total: $${item.getTotal()}`);
      }
    }
  }
    