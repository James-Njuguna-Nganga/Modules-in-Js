// importing the products and orders by destructring the exports
const { addProduct, getAllProducts } = require('./products');
const { placeOrder, getAllOrders } = require('./orders');
const { addUser, authenticateUser,users } = require('./auth');
const { setUserRole, getUserRole } = require('./roles');

// Add some products
addProduct("Laptop", 999);
addProduct("Phone", 599);
addProduct("TV",2000);
addProduct("fridge",15000);

// Place orders
placeOrder("Laptop", 2);
placeOrder("Phone", 3);
placeOrder("TV", 10);


//Add users
addUser("John", "12345");
addUser("King", "67890");
addUser("James", "55555");

// Set user roles
setUserRole("John", "admin");
setUserRole("King", "user");
setUserRole("James", "manager");
//display all users pushed in the array
console.log("All Users:");
console.log(users);

// Authenticate users
console.log(authenticateUser("John", "12345")); // Output: true
console.log(authenticateUser("King", "6789000")); // Output: false
console.log(authenticateUser("James", "55555"));//true

// Get user roles
console.log(getUserRole("John")); // Output: admin
console.log(getUserRole("King")); // Output: user
console.log(getUserRole("James")); // Output: manager

// Display all products and orders and all users added
console.log("All Products:");
console.log(getAllProducts());

console.log("All Orders:");
console.log(getAllOrders());



