"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: "./server/other/.env" });
const pool = new pg_1.Pool({
    user: process.env.user,
    password: process.env.password,
    host: process.env.DB,
    port: Number(process.env.poolPort),
    database: process.env.database,
});
exports.default = pool;
