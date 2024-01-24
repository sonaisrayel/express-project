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

export async function getUsers() {
    try {
        const db = await connectToMongoDB();
        const coll = db.collection('users');
        return coll.find({}).toArray();
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message)
    }
}


export async function getUser(user) {
    try {
        const db = await connectToMongoDB();
        const coll = db.collection('users');
        return await coll.findOne(user)
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function createUser(user) {
    try {
        const db = await connectToMongoDB();
        const coll = db.collection('users');
        return await coll.insertOne(user)
    } catch (e) {
        console.log('Error in createUsers', e.message);
        throw new Error(e.message)
    }
}


export async function updateUser(user,update){
    try {
        const db = await connectToMongoDB(user);
        const coll = db.collection('users');
        return  await coll.updateOne(user, { $set: update });
    } catch (e) {
      throw new Error(e.message)
    }
}


export async function deleteUser(user) {
    try {
        const db = await connectToMongoDB(user);
        const coll = db.collection('users');
        return await coll.deleteMany(user)
    } catch (e) {
        throw new Error(e.message)
    }
}