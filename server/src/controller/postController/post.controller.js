"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../db/db"));
class PostController {
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, content, userId } = req.body;
            const newPost = yield db_1.default.query("INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *", [title, content, userId]);
            res.json(newPost.rows[0]);
        });
    }
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield db_1.default.query('SELECT * FROM post');
            res.json(posts.rows);
        });
    }
    getOnePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const user = yield db_1.default.query("SELECT * FROM post WHERE id = $1", [id]);
            res.json(user.rows[0]);
        });
    }
    getPostsByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.query.id);
            const posts = yield db_1.default.query(`SELECT post.id, post.title, post.content, post.user_id, person.name, person.surname
            FROM post 
            JOIN person ON post.user_id = person.id
            WHERE user_id = $1`, [id]);
            res.json(posts.rows);
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, content } = req.body;
            let query = `UPDATE post SET`;
            let params = [];
            if (title) {
                params.push(title);
                query += ` title=$${params.length},`;
            }
            if (content) {
                params.push(content);
                query += ` content=$${params.length},`;
            }
            params.push(id);
            query = query.slice(0, -1);
            query += ` WHERE id = $${params.length} RETURNING *`;
            const post = yield db_1.default.query(query, params);
            res.json(post.rows[0]);
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const post = yield db_1.default.query("DELETE FROM post WHERE id = $1", [id]);
            res.json(`post ${post.oid} id delete`);
        });
    }
}
exports.default = new PostController();
