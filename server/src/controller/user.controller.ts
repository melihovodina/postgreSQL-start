import express from "express";
import db from "../db/db";

class UserController {
    async createUser(req: express.Request, res: express.Response) {
        const {name, surname} = req.body;
        const newUser = await db.query("INSERT INTO person (name, surname) values ($1, $2) RETURNING *", [name, surname])
        res.json(newUser);
    }

    async getUsers(req: express.Request, res: express.Response) {

    }

    async getOneUser(req: express.Request, res: express.Response) {

    }

    async updateUser(req: express.Request, res: express.Response) {

    }
    
    async deleteUser(req: express.Request, res: express.Response) {

    }
}

export default new UserController();