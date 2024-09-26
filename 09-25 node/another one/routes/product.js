import express from "express"

const router = express.Router()

router.get('/product', (req, res)=>{
    console.log('product oldal')
    res.send(`<h2>Product oldal</h2>
        <p>Productok később</p>`)
})



export default router