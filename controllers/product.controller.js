import * as productService from "../services/product.service.js";

const getProducts = (req, res) => {
    const products = productService.getProducts();
    res.json({
        data: products
    });
};

const createProducts = (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            message: "Name and price are required",
        });
    }

    const product = productService.createProducts(name, price);
    
    return res.status(201).json({
        message: "Product created",
        data: product
    });
};

export { getProducts, createProducts };