// $(document).ready(function){
//   $("#you").submit(function){
//     $("name").append("");
//     $("tel").append("");
//
//     $("#yourinfo").show();
//
//     event.preventDefault();
//   };
// };


var shop = [
  {
    name: "Black Ruby,",
    price: 1400,
    quantity: 0
  },
  {
    name: "Heels",
    price: 1200,
    quantity: 0
  },
  {
    name: "Flower Ruby",
    price: 1400,
    quantity: 0
  },
];

  var app = new Vue({
  el: "#app",
  data: {
    items: [],
    shop: shop,
    showCart: false,
    verified: false,
  },

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
