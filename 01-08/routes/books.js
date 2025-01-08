import express from "express";
import { dbQuery, dbRun ,serialize, db } from "../database.js";

const router = express.Router();
//works
router.get('/', async (req, res) => {
    const books = await dbQuery('SELECT * FROM books');
    res.json(books);
})
//works in swagger
router.post('/', async (req, res) =>{
    try{
        console.log(req.body);
        let result= await dbRun('INSERT INTO books (title, author, description, year) VALUES (?,?,?,?)', [req.body.title, req.body.author, req.body.description, req.body.year]);
    }
    catch(err){
        return res.sendStatus(400);
    }
    res.sendStatus(201);
})
//works
router.get('/:id', async (req, res) => {
    try{
        const [book] = await dbQuery('SELECT * FROM books WHERE id = ?', [req.params.id]);
        if(!book){
            return res.sendStatus(404);
        }
        res.json(book);
    }
    catch(err){
        return res.sendStatus(400);
    }
})
//works in swagger
router.put('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {title, author, description, year} = req.body;
        console.log(req.body);
        if(!title || !author || !description || !year){
            return res.sendStatus(400);
        }
        await dbRun('UPDATE books SET title = ?, author = ?, description = ?, year = ? WHERE id = ?', [title, author, description, year, id]);
    }
    catch(err){
        return res.sendStatus(400);
    }
    res.sendStatus(200);
})
//works
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await dbRun('DELETE FROM books WHERE id = ?', [id]);
    res.sendStatus(204);
})

export {router as booksRouter};