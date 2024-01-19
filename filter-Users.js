const filterUsers = function (req, res, next) {
    const arr = req.body
    const filteredUsers = arr.filter ((e) => e.userType === "Admin");
    return  res.status(404).send(filteredUsers)
    next()
}

export default filterUsers




