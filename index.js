import {getUsers} from './users.js' ;
import fs from 'fs'

(async function (){
    const users = await getUsers()
    fs.writeFileSync("users.json",JSON.stringify(users,null,2))

})()



