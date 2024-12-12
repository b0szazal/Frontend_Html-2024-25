import express from "express";
import { dbQuery, dbRun } from "../database.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", async (req, res, next) => {
    try {
        const products = await dbQuery("SELECT * FROM products;");
        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const [product] = await dbQuery("SELECT * FROM products WHERE id =?;", [req.params.id]);
        if (!product) return res.status(404).json({ message: "product not found" });
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

router.post("/", upload.single('image'), async (req, res, next) => {
    try {
        const fileBuffer = req.file.buffer;
        const base64Image = fileBuffer.toString('base64');
        const result = await dbRun("INSERT INTO products (name, description, image, price) VALUES (?, ?, ?, ?);", [req.body.name, req.body.description, base64Image, req.body.price]);
        res.status(201).json({ ...result, ...req.body });
    } catch (err) {
        next(err);
    }
});

router.put("/:id", upload.single('image'), async (req, res, next) => {
    try {
        const [product] = await dbQuery("SELECT * FROM products WHERE id =?;", [req.params.id]);
        if (!product) return res.status(404).json({ message: "product not found" });

        const fileBuffer = req.file.buffer;
        const base64Image = fileBuffer.toString('base64');

        await dbRun("UPDATE products SET name =?, description =?, image =?, price =? WHERE id =?;", [req.body.name || product.name, req.body.description || product.description, base64Image || product.image, req.body.price || product.price, req.params.id]);
        res.status(200).json(req.body);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const [product] = await dbQuery("SELECT * FROM products WHERE id =?;", [req.params.id]);
        if (!product) return res.status(404).json({ message: "product not found" });

        await dbRun("DELETE FROM products WHERE id =?;", [req.params.id]);
        res.status(204).send();
    } catch (err) {
        next(err);
    }
});

export default router;