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
    name: "Black Ruby",
    price: 1400,
    quantity: 0
    // image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Fcb%2F23%2F3f%2Fcb233fd567609bba839b87d06a6dd3b0--purple-wedding-shoes-high-heel-pumps.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fexplore%2Fhigh-heels-2014%2F&docid=UOpAyUCXOYtoPM&tbnid=Yp4r-6Hq9x0ekM%3A&vet=10ahUKEwid5qjjsePVAhUFWRQKHSVxD4M4ZBAzCC4oKzAr..i&w=736&h=736&bih=613&biw=1366&q=heels&ved=0ahUKEwid5qjjsePVAhUFWRQKHSVxD4M4ZBAzCC4oKzAr&iact=mrc&uact=8",
  },
  {
    name: "Heels",
    price: 1200,
    quantity: 0
    // image:"shoes/heel2.jpg",
  },
  {
    name: "Flower Ruby",
    price: 1400,
    quantity: 0
    // image:"shoes/boot1.jpg",
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
