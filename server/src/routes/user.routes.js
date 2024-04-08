"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const router = (0, express_1.default)();
router.post('/user', user_controller_1.default.createUser);
router.get('/user', user_controller_1.default.getUsers);
router.get('/user/:id', user_controller_1.default.getOneUser);
router.put('/user', user_controller_1.default.updateUser);
router.delete('/user/:id', user_controller_1.default.deleteUser);
exports.default = router;
