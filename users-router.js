import express from 'express';
import fs from 'fs';    



const router = express.Router()

router.get('/admins', (req, res) =>{
    res.send(req.adminUsers)
})

router.get('/', (req, res) => {
    res.send(JSON.parse(fs.readFileSync('users.json')))
})

export default router