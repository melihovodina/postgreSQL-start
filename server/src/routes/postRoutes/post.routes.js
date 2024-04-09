"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = __importDefault(require("../../controller/postController/post.controller"));
const router = (0, express_1.default)();
router.post('/post', post_controller_1.default.createPost);
router.get('/post', post_controller_1.default.getPosts);
router.get('/postByUser', post_controller_1.default.getPostsByUser);
router.get('/post/:id', post_controller_1.default.getOnePost);
router.put('/post', post_controller_1.default.updatePost);
router.delete('/post/:id', post_controller_1.default.deletePost);
exports.default = router;
