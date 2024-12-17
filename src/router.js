import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    try {
        const dataUrl = `${req.protocol}://${req.get("host")}/data.json`;
        fetch(dataUrl)
            .then((response) => response.json())
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(500).json({ error: error.message }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
