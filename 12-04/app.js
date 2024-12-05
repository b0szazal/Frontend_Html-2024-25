import express, { json } from "express";
import cors from "cors";
import { initializeDB } from "./database.js";
import usersRouter from "./routes/users.js";
import swaggerUi from 'swagger-ui-express';
import {readFile} from "fs/promises";
import { join } from "path";

const app = express();
const swaggerDocument = JSON.parse(await readFile(new URL("./swagger-output.json", import.meta.url)));

app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);
app.use("/users-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const startServer = async () => {
    await initializeDB();
    app.listen(3000, () => console.log("Server is running on port 3000"));
};

startServer();
