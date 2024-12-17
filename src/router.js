import { Router } from "express";
import path from "path";
import fs from "fs";

const router = Router();

router.get("/", (req, res) => {
    try {
        // Construye la ruta absoluta correctamente
        const usersPath = path.join(process.cwd(), "public", "data.json");
        const data = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
