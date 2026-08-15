import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "asd",
    database: "belajar_nodejs",
});

export default pool;