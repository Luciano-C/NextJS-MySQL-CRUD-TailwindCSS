import { createPool } from "mysql2/promise";

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PASSWORD,
    port:3306,
    database: "productsdb"
})

export { pool }