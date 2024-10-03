import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import bodyParser from 'body-parser' 

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.use(bodyParser.urlencoded({ extended: false }) ) 

router.get('/', (req, res)=>{
    console.log('app use 1. üzenet')
    res.sendFile(path.join(__dirname, '..',  'views', 'index.html'))
})
router.get('/user', (req, res)=>{
    console.log('app user üzenet')
    res.sendFile(path.join(__dirname, '..',  'views', 'user.html'))
})

router.post('/user', (req, res)=>{
    console.log('post')
    res.send(`Its a me Wario`)
})

router.post('/create-user', (req, res)=>{
    const userName = req.body.userName
    res.send(`A user ${userName} has been created`)
    res.redirect('/user')
})
export default router