  # A SIMPLE E-Commerce project to show modules concept in Javascript

This is a simple e-commerce application built with Node.js. It allows users to add products, place orders, and manage user authentication and roles.

  ## Features

- Add products with name and price.
- Place orders for products with specified quantities.
- User authentication with username and password.
- Assign roles to users (e.g., admin, user).
- Dynamic handling of orders based on quantity (default vs. bulk).

   ## Usage

1. Clone the repository:

```bash
git clone https://github.com/jimmie-code/Modules-in-Js

Install dependencies:
npm install
Run the application:
node main    //our main file
Use the provided functionalities by calling the appropriate functions from the main.js file.


   File Structure

main.js: Main file orchestrating interactions between our  modules.
products.js: Module for product-related operations.ie can add new products and display them.
orders.js: Module for order-related functionality.Which i have incorporated dynamic imports.
auth.js: Module for user authentication.Checks the users username and password and display either true or false
roles.js: Module for managing user roles.Where users can either have admin,user or manager roles etc.
defaultOrderHandler.js: Module for processing default orders.That is orders that are quantity is 5 or less according to our condition.
bulkOrderHandler.js: Module for processing bulk orders.That is orders with quantities above 5.


     Contributing 
Contributions are welcome! Please read the [contributing guidelines] before getting started.
