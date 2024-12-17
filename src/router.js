import { Router } from "express";
import fs from "fs";


import path from 'path';



const router = Router();

router.get("/", (req, res) => {
    try {
        let usersPath = path.join(process.cwd(), '../public/data.json');

        let data = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
        res.json(data).status(200);
    } catch (error) {
        res.json({ error: error.message }).status(500);
    }
});

export default router;