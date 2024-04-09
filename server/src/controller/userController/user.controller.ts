import express from "express";
import db from "../../db/db";

class UserController {
    async createUser(req: express.Request, res: express.Response) {
        const {name, surname} = req.body;
        const newUser = await db.query("INSERT INTO person (name, surname) values ($1, $2) RETURNING *", [name, surname])
        res.json(newUser.rows[0]);
    }

    async getUsers(req: express.Request, res: express.Response) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }

    async getOneUser(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const user = await db.query("SELECT * FROM person WHERE id = $1", [id])
        res.json(user.rows[0])
    }

    async updateUser(req: express.Request, res: express.Response) {
        const {id, name, surname} = req.body;
        const user = await db.query("UPDATE person SET name = $1, surname = $2 where id = $3 RETURNING *", 
            [name, surname, id]
        )
        res.json(user.rows[0])
    }
    
    async deleteUser(req: express.Request, res: express.Response) {
        const id = req.params.id;
        const user = await db.query("DELETE FROM person WHERE id = $1", [id])
        res.json(user.rows[0])
    }
}

export default new UserController();