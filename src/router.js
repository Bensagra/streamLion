import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    try {
        // Realiza la petición directamente a /data.json
        const response = await fetch("https://stream-lion.vercel.app/data.json");

        // Verifica si la petición fue exitosa
        if (!response.ok) {
            throw new Error("No se pudo obtener el archivo JSON");
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
