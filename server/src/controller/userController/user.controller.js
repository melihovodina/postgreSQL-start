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
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, surname } = req.body;
            const newUser = yield db_1.default.query("INSERT INTO person (name, surname) values ($1, $2) RETURNING *", [name, surname]);
            res.json(newUser.rows[0]);
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield db_1.default.query('SELECT * FROM person');
            res.json(users.rows);
        });
    }
    getOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const user = yield db_1.default.query("SELECT * FROM person WHERE id = $1", [id]);
            res.json(user.rows[0]);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, surname } = req.body;
            const user = yield db_1.default.query("UPDATE person SET name = $1, surname = $2 where id = $3 RETURNING *", [name, surname, id]);
            res.json(user.rows[0]);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const user = yield db_1.default.query("DELETE FROM person WHERE id = $1", [id]);
            res.json(user.rows[0]);
        });
    }
}
exports.default = new UserController();
