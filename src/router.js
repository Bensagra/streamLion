import { Router } from "express";
import fs from "fs";





const router = Router();

router.get("/", (req, res) => {
    try {
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
        res.json(data).status(200);
    } catch (error) {
        res.json({ error: error.message }).status(500);
    }
});

export default router;