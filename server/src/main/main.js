"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("../routes/userRoutes/user.routes"));
const post_routes_1 = __importDefault(require("../routes/postRoutes/post.routes"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: "./server/other/.env" });
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', user_routes_1.default);
app.use('/api', post_routes_1.default);
app.listen(PORT, () => { console.log(`listening port ${PORT}`); });
