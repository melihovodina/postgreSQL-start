import Router from "express";
import PostController from "../../controller/postController/post.controller";

const router = Router();

router.post('/post', PostController.createPost)
router.get('/post', PostController.getPosts)
router.get('/postByUser', PostController.getPostsByUser)
router.get('/post/:id', PostController.getOnePost)
router.put('/post', PostController.updatePost)
router.delete('/post/:id', PostController.deletePost)

export default router;