import express from 'express';
import { serialize } from './database.js';
import {plantRouter} from './routes/plantRoute.js';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/plants",plantRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

async function startServer(){
  await serialize();
  app.listen(3000, () => console.log("Server is running on port 3000, http://localhost:3000/api/plants"));
}

startServer();