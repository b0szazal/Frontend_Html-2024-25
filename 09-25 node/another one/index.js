import express from "express"
import productRoute from "./routes/product.js"
import adminRoute from "./routes/admin.js"

const app=express()
const PORT=3001

app.use(productRoute)
app.use(adminRoute)

app.listen(PORT, ()=>{
    console.log("press Ctrl+c to stop the server")
    console.log(`Fut a szerver a localhost:${PORT} porton`)
})