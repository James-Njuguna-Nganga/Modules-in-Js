
const products = [];

function addProduct(name, price) {
    products.push({ name, price });
}

function getAllProducts() {
    return products;
}

module.exports = {
    addProduct,
    getAllProducts
};