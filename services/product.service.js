const products = [{ id: 1, name: "Laptop", price: 1000 }, { id: 2, name: "Smartphone", price: 500 }, { id: 3, name: "Tablet", price: 300 }];

const getProducts = () => {
    return products;
}

const createProducts = (name, price) => {
    const product = {
        id: products.length + 1,
        name,
        price,
    };
    products.push(product);
    return product;
}

export {
    getProducts,
    createProducts,
};