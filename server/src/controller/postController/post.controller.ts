import express from "express";
import db from "../../db/db";

class PostController {
    async createPost(req: express.Request, res: express.Response) {
        const {title, content, userId} = req.body;
        const newPost = await db.query("INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *", [title, content, userId])
        res.json(newPost.rows[0]);
    }

    async getPosts(req: express.Request, res: express.Response) {
        const posts = await db.query('SELECT * FROM post')
        res.json(posts.rows)
    }

    async getOnePost(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const user = await db.query("SELECT * FROM post WHERE id = $1", [id])
        res.json(user.rows[0])
    }

    async getPostsByUser(req: express.Request, res: express.Response) {
        const id = Number(req.query.id); 
        const posts = await db.query(
            `SELECT post.id, post.title, post.content, post.user_id, person.name, person.surname
            FROM post 
            JOIN person ON post.user_id = person.id
            WHERE user_id = $1`, [id]
        )
        res.json(posts.rows)
    }

    async updatePost(req: express.Request, res: express.Response) {
        const {id, title, content} = req.body;
        let query = `UPDATE post SET`
        let params = []
        if (title) {
            params.push(title)
            query += ` title=$${params.length},`
        }
        if (content) {
            params.push(content)
            query += ` content=$${params.length},`
        }
        params.push(id)
        query = query.slice(0, -1);
        query += ` WHERE id = $${params.length} RETURNING *`;
        const post = await db.query(query, params);
        res.json(post.rows[0]);
    }
    
    async deletePost(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const post = await db.query("DELETE FROM post WHERE id = $1", [id])
        res.json(`post was deleted successfully`)
    }
}

export default new PostController();