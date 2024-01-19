import express from "express";
const app = express();

app.use(express.json())


import filterUsers from "./filter-Users.js";

// app.get("/", (req,res)=> {
    // const {id,username,userType} = req.body
    // console.log(req.body);
    // console.log(id);
//     res.status(201).send({id,username,userType})
// })

app.post('/',filterUsers,(req,res)=> {
    // console.log(id);
    res.status(201).end()
})


app.listen(3000,()=> {
    console.log(`Server started at port 3000`)
})




