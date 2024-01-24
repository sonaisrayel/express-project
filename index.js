import express from 'express';
const app = express();

import userRouter from './Router/users-router.js'
import todoRouter from './Router/todo-router.js'
// import authRouter from './auth-router.js';

// import * as middleware from './middlewares'

app.use(express.json());
// app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/todos', todoRouter);


app.listen(3000, () => {
    console.log(`Server started at port 3000`)
})




