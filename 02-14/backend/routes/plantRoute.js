import e, { Router } from "express";
import { dbQuery, dbRun } from "../database.js";

const router = Router();

router.get('/', async (req, res) => {
    const plants = await dbQuery('SELECT * FROM plants');
    res.json(plants);
})
router.post('/', async (req, res) =>{
    try{
        console.log(req.body);
        let result= await dbRun('INSERT INTO plants (nev, eveloE, kategoria, ar) VALUES (?,?,?,?)', [req.body.nev, req.body.eveloE, req.body.kategoria, req.body.ar]);
    }
    catch(err){
        return res.sendStatus(400);
    }
    res.sendStatus(201);
})
router.put('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {nev, eveloE, kategoria, ar} = req.body;
        console.log(req.body);
        if(!nev || eveloE==undefined || !kategoria || !ar){
            return res.sendStatus(400);
        }
        await dbRun('UPDATE plants SET nev = ?, eveloE = ?, kategoria = ?, ar = ? WHERE id = ?', [nev, eveloE, kategoria, ar, id]);
    }
    catch(err){
        return res.sendStatus(400);
    }
    res.sendStatus(200);
})
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    await dbRun('DELETE FROM plants WHERE id = ?', [id]);
    res.sendStatus(204);
})

export {router as plantRouter}