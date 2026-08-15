import pool from "../databases/db.js";


const getUser = async () => {
    const result = await pool.query("SELECT * FROM users ORDER BY id");
    return result.rows;
};

const getUsersById = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    // console.log("result.rows[0]:", result.rows[0]);
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

const updateUser = async (id, name, email) => {
    const result = await pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
        [name, email, id]
    );
    const user = result.rows[0];
    return user;
}

const deleteUser = async (id) => {
    const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [id]
    );
    const user = result.rows[0];
    return user;
};

export {
    getUser,
    createUser,
    getUsersById,
    updateUser,
    deleteUser
};