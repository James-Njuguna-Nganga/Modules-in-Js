
const products = [];

const addProduct = (name, price) => {
    products.push({ name, price });
};

const getAllProducts = () => {
    return products;
};


module.exports = {
    addProduct,
    getAllProducts
};