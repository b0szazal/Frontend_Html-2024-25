import express from 'express'

const app = express()
const PORT=3000;
app.use('/', (req, res, next)=>{
    console.log('app use 1. üzenet')
    next()
})
app.use('/user', (req, res, next)=>{
    console.log('app use 2. üzenet')
    res.send("Its a me Wario")
    next()
})
app.use('/', (req, res, next)=>{
    console.log('app use 3. üzenet')
    res.send("Szia")
})

app.listen(PORT, ()=>{
    console.log("press Ctrl+c to stop the server")
    console.log(`Fut a szerver a localhost:${PORT} porton`)
})