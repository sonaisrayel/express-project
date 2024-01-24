import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017';

const dbName = 'todo'

async function connectToMongoDB() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected to mongoDB');
        return client.db(dbName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
        throw error
    }
}

export async function getTodos() {
    try {
        const db = await connectToMongoDB();
        const coll = db.collection('todo');
        return coll.find({}).toArray();
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message)
    }
}


export async function getTodo(todo) {
    try {
        const db = await connectToMongoDB();
        const coll = db.collection('todo');
        return await coll.findOne(todo)
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function createTodo(todo) {
    try {
        const db = await connectToMongoDB();
        const coll = db.collection('todo');
        return await coll.insertOne(todo)
    } catch (e) {
        console.log('Error in createTodo', e.message);
        throw new Error(e.message)
    }
}


export async function updateTodo(todo,update){
    try {
        const db = await connectToMongoDB(todo);
        const coll = db.collection('todo');
        return  await coll.updateOne(todo, { $set: update });
    } catch (e) {
      throw new Error(e.message)
    }
}


export async function deleteTodo(todo) {
    try {
        const db = await connectToMongoDB(todo);
        const coll = db.collection('todo');
        return await coll.deleteMany(todo)
    } catch (e) {
        throw new Error(e.message)
    }
}