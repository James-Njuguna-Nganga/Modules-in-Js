
const orders = [];
//dynamic imports returns a promise
const placeOrder = async (productName, quantity) => {
    // Dynamically import module based on condition
    let orderHandler;
    if (quantity > 5) {
        orderHandler = await import('./bulkOrderHandler.js');
    } else {
        orderHandler = await import('./defaultOrderHandler.js');
    }

    orders.push({ productName, quantity });

    // Use function from dynamically imported module
    orderHandler.processOrder({ productName, quantity });
};

const getAllOrders = () => {
    return orders;
};

module.exports = {
    placeOrder,
    getAllOrders
};
