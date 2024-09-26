import express from 'express'

const router = express.Router()

router.get('/', (req, res)=>{
    console.log('app use 1. üzenet')
    res.send('<h2>Root page</h2>')
})
router.get('/user', (req, res)=>{
    console.log('app user üzenet')
    res.send(`<form action="/user" method=POST>
        <input type="text" name="userName">
        <button type="submit">Send</button>`)
})

router.post('/user', (req, res)=>{
    console.log('post')
    res.send(`Its a me Wario`)
})

export default router