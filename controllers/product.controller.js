import * as productService from "../services/product.service.js";

const getProducts = async (req, res, next) => {
    try {
        const products = await productService.getProducts();
        res.json({
            data: products
        });
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        // for view iat and exp token
        // console.log("USER:", req.user);

        res.json({
            data: product
        });
    } catch (error) {
        next(error);
    }
};

const createProducts = async (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        await productService.deleteProduct(id);
        res.json({
            message: "Product deleted",
            data: product
        });
    } catch (error) {
        next(error);
    }
}


export { getProducts, createProducts, getProductById, updateProduct, deleteProduct };