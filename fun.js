const shop = [
  {
  name: "Black Ruby, Vol. 5",
    price: 1400,
    quantity: 0
  },
  {
    name: "Heels '66, Vol. 5",
    price: 1200,
    quantity: 0
  },
  {
    name: "Flower Ruby, Vol. 1",
    price: 1400,
    quantity: 0
  },
];  

  const app = new Vue({
  el: "#app",
  data: {
    message:'hello there',
    items: [],
    shop: shop,
    showCart: false,
    verified: false,
  },
]
  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    addToCart(item) {
      item.quantity += 1;
      this.items.push(item);
    },
    removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
});
