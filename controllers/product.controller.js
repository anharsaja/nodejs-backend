import * as productService from "../services/product.service.js";

const getProducts = async (req, res) => {
    const products = await productService.getProducts();
    res.json({
        data: products
    });
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) {
        return res.status(404).json({
            message: "Product not found",
        });
    }
    res.json({
        data: product
    });
};

const createProducts = async (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            message: "Name and price are required",
        });
    }

    const product = await productService.createProducts(name, price);
    
    return res.status(201).json({
        message: "Product created",
        data: product
    });
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            message: "Name and price are required",
        });
    }

    const product = await productService.updateProduct(id, name, price);

    return res.json({
        message: "Product updated",
        data: product
    });
};


export { getProducts, createProducts, getProductById, updateProduct };