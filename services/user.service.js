import pool from "../databases/db.js";


const getUser = async () => {
    const result = await pool.query("SELECT * FROM users ORDER BY id");
    return result.rows;
};

const getUsersById = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
}

const createUser = async (name, email) => {
    const result = await pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
        [name, email]
    );
    const user = result.rows[0];
    return user;
};

export {
    getUser,
    createUser,
    getUsersById
};