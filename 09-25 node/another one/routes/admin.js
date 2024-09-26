import express from "express"

const router = express.Router()

router.get('/admin', (req, res)=>{
    console.log('admin oldal')
    res.send(`<h2>Admin oldal</h2>
        <form action="/admin/product" method=POST>
        <input type="text" name="productName" placeholder="termék neve">
        <input type="number" name="productPrice" placeholder="termék ára (FT)">
        <button type="submit">Termék felvétele</button>`)
})
router.get('/', (req, res)=>{
    res.send(`<h2>root page</h2>
        <p>You shouldnt be here</p>`)
})

router.post('/admin/product', (req, res)=>{
    res.send("Termék létrehozva")
})

export default router