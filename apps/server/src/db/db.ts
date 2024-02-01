import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    password: "stlp",
    host: "localhost",
    port: 5432,
    database: "chatapp",
});

export default pool;