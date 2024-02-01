import express, { Express, Request, Response, Application } from 'express';
import cors from "cors";
import pool from "../db/db";
import { Router } from 'express';

const app: Application = express();

app.use(express.json());
app.use(cors());

const router = Router();

// get messages

router.get("/get-messages/:receiver/:sender", async (req: Request, res: Response) => {
    try {
        const { receiver, sender } = req.params;

        const query = `
            SELECT * 
            FROM messages 
            WHERE (sender = $1 AND receiver = $2)
        `;

        const messages = await pool.query(query, [sender, receiver]);
        res.json(messages.rows);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


// add message

router.post("/add-message/:receiver", async (req: Request, res: Response) => {
    try {
        const { receiver } = req.params;
        const { sender, message } = req.body;
        const newMessage = await pool.query(
            "INSERT INTO messages (sender, receiver, message) VALUES($1, $2, $3) RETURNING *",
            [sender, receiver, message]
        );
        res.json(newMessage.rows[0]);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


export default router;