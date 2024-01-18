
import express from 'express';
import fs from 'fs';

import userRouter from './users-router.js'
import { filterAdmins, experience } from './middleware.js'


const app = express();

app.use(express.json());
app.use(filterAdmins);

app.use(userRouter);

const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'))


app.post('/:id', experience, (req, res) => {
    const { id, experience } = req.body;
    res.status(201).send(`id:${id}, experience: ${experience}`)
})

app.listen(3001, () => {
    console.log(`Server started at port 3000`)
})




