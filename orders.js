
const orders = [];

function placeOrder(productName, quantity) {
    orders.push({ productName, quantity });
}

function getAllOrders() {
    return orders;
}

module.exports = {
    placeOrder,
    getAllOrders
};