// importing the products and orders by destructring the exports
const { addProduct, getAllProducts } = require('./products');
const { placeOrder, getAllOrders } = require('./orders');
const { addUser, authenticateUser } = require('./auth');

// Add some products
addProduct("Laptop", 999);
addProduct("Phone", 599);
addProduct("TV",2000);
addProduct("fridge",15000);
//Add users
addUser("user1", "password1");
addUser("user2", "password2");

// Authenticate users
console.log(authenticateUser("user1", "password1")); // Output: true
console.log(authenticateUser("user2", "wrongPassword")); // Output: false

// Place orders
placeOrder("Laptop", 2);
placeOrder("Phone", 3);
placeOrder("TV", 5);
placeOrder("fridge", 10);

//Add users
addUser("user1", "password1");
addUser("user2", "password2");

// Authenticate users
console.log(authenticateUser("user1", "password1")); // Output: true
console.log(authenticateUser("user2", "wrongPassword")); // Output: false


// Display all products and orders
console.log("All Products:");
console.log(getAllProducts());

console.log("All Orders:");
console.log(getAllOrders());

console.log("All Users:");
console.log(users);
