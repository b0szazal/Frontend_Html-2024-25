import express from 'express'
import userRoutes from './routes/user.js'

const app = express()
const PORT=3000;

app.use(userRoutes)

app.listen(PORT, ()=>{
    console.log("press Ctrl+c to stop the server")
    console.log(`Fut a szerver a localhost:${PORT} porton`)
})