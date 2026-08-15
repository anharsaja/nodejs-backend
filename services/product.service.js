import pool from "../databases/db.js";


const getProducts = async () => {
    const result = await pool.query("SELECT * FROM products ORDER BY id");
    return result.rows;
};

const getProductById = async (id) => {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
    return result.rows[0];
}

const createProducts = async (name, price) => {
    const result = await pool.query(
        "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *",
        [name, price]
    );
    const product = result.rows[0];
    return product;
}

const updateProduct = async (id, name, price) => {
    const result = await pool.query(
        "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *",
        [name, price, id]
    );
    const product = result.rows[0];
    return product;
}

export {
    getProducts,
    createProducts,
    getProductById,
    updateProduct
};