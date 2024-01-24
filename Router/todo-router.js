import { Router } from 'express';
const router = Router();
// import { isAdmin } from '/middlewares/middleware.js';
import { getTodos, getTodo, updateTodo, deleteTodo } from '../storages/mongodbTodo.js';

  

router.get('/:title?', async (req, res) =>{
    try {
        const { title } = req.params;
        const todos = title ? await getTodo({ title }) : await getTodos();
        res.status(201).send({data:todos})
    } catch (e) {
        res.status(404).send({data: "Something went wrong!"})
    }
})

router.delete('/', async (req, res) => {
    try {
        const { title } = req.body;
        const deletedTodo = await deleteTodo({title});
        res.status(200).send({ data: deletedTodo })
    } catch (e) {
        res.status(404).send(e.message)
    }
})

router.put('/', async (req, res) => {
    try {
        const { id, title } = req.body;
        await updateTodo({ id }, { title })
        res.status(201).send({ data: `Todo successfully updated!` })
    } catch (e) {
        res.status(404).send({ data: "Failed to update!" })
    }
})

router.put('/desc', async (req,res) => {
    try {
        const { id, description } = req.body;
        await updateTodo({id}, {description})
        res.status(201).send({data:"Updated description"})
    } catch (e) {
        res.status(404).send({data: "Failed to update"})
    }
})

router.put('/complete', async (req, res) => {
    try {
        const {id, completed } = req.body;
        await updateTodo({id}, {completed})
        res.status(201).send({data:"Updated complete"})   
    } catch (e) {
        res.status(404).send({data:"Failed to update"})
    }
})

export default router