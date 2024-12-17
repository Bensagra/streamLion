import { Router } from "express";
import path from 'path';


import fs from "fs";





const router = Router();

router.get("/", (req, res) => {
    try {
        let data = JSON.parse(fs.readFileSync(path.resolve('./data.json'), 'utf-8'));
        res.json(data).status(200);
    } catch (error) {
        res.json({ error: error.message }).status(500);
    }
});

export default router;