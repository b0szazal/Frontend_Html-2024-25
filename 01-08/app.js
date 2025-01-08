import express from 'express';
import { serialize } from './database.js';
import {booksRouter} from './routes/books.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import {readFile} from "fs/promises";
import { join } from "path";


const app = express();
const swaggerDocument = JSON.parse(await readFile(new URL("./swagger-output.json", import.meta.url)));

app.use(cors());
app.use(express.json());
app.use("/api/books",booksRouter);
app.use("/book-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

async function startServer(){
  await serialize();
  app.listen(3000, () => console.log("Server is running on port 3000, http://localhost:3000/api/books, swagger http://localhost:3000/book-docs"));
}

startServer();