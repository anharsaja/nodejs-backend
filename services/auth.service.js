import bcrypt from "bcrypt";
import pool from "../databases/db.js";
import jwt from "jsonwebtoken";

const login = async (email, password) => {
    const result = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );

    const user = result.rows[0];

    if (!user) {
        return null;
    }

    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    );
    if (!isPasswordValid) {
        return null;
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
        },
        "secret-key",
        {
            expiresIn: "1h",
        }
    );
    return { user, token };
}


export {
    login
};