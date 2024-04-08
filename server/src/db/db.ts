import { Pool } from "pg";
import { config } from "dotenv";
config({ path: "./server/other/.env" });

const pool = new Pool({
    user: process.env.user,
    password: process.env.password,
    host: process.env.DB,
    port: Number(process.env.poolPort),
    database: process.env.database,
});

module.exports = pool;