
import fs from 'fs';

export const filterAdmins = (req, res, next) => {
    const users = JSON.parse(fs.readFileSync('users.json'));
    req.adminUsers = users.filter(user => user.userType === 'Admin');
    next();
};

export const experience = (req, res, next) => {
    const { id, experience } = req.body;
    const users = JSON.parse(fs.readFileSync('users.json'));

    if (id && users.userType === "Admin") {
        next()
    } else {
        res.send("User is not Admin")
        next();
    }

}

