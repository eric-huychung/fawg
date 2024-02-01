import express, { Express, Request, Response, Application } from 'express';
import cors from "cors";
import pool from "../db/db";
import { Router } from 'express';

const app: Application = express();

app.use(express.json());
app.use(cors());

const router = Router();

// Routes //

// create a user

router.post("/create-user", async (req: Request, res: Response) => {
    try {
        // console.log(req.body);
        const { username, password } = req.body;
        const newUserInfo = await pool.query(
            "INSERT INTO \"users\" (username, password) VALUES($1, $2) RETURNING *",
            [username, password]
        );
        res.json(newUserInfo.rows[0]);
    } catch (error: any) {
        // console.error(error.message);
        res.status(500).json({ error: error.message });
    }
});

// get all users

router.get("/get-user", async (req: Request, res: Response) => {
    try {
        const users = await pool.query("SELECT * FROM \"users\"");
        res.json(users.rows);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// get a user

router.get("/get-user/:username", async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const user = await pool.query(
            "SELECT * FROM \"users\" WHERE username = $1", 
            [username]
        );
        res.json(user.rows[0]);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// delete a user

router.delete("/get-user/:username", async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const user = await pool.query(
            "DELETE FROM \"users\" WHERE username = $1", 
            [username]
        );
        res.json("user deleted!");
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// update user username

router.put("/get-user/:username/username", async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const { username: newUsername } = req.body;

        if (newUsername === null || newUsername === undefined) {
            return res.status(400).json({ error: "newUsername cannot be null or undefined" });
        }

        if (newUsername.trim() === "") {
            return res.status(400).json({ error: "newUsername cannot be an empty string" });
        }

        const update = await pool.query(
            "UPDATE \"users\" SET username = $1 WHERE username = $2", 
            [newUsername, username]
        );
        res.json("username updated!");
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// update user password

router.put("/get-user/:username/password", async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const { password: newPassword } = req.body;

        if (newPassword === null || newPassword === undefined) {
            return res.status(400).json({ error: "newPassword cannot be null or undefined" });
        }

        if (newPassword.trim() === "") {
            return res.status(400).json({ error: "newPassword cannot be an empty string" });
        }

        const update = await pool.query(
            "UPDATE \"users\" SET password = $1 WHERE username = $2", 
            [newPassword, username]
        );
        res.json("password updated!");
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


export default router;

