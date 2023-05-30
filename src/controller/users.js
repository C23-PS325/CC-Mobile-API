const getAllUsers = (req, res) => {
    const sampleData = {
        id: "1",
        email: "admin@communicare.id",
    }

    res.json({
        message: "GET all user success",
        data: sampleData 
    })
}

const createNewUser = (req, res) => {
    console.log(req.body)
    res.json({
        message: "CREATE new user success",
    })
}

const updateUser = (req, res) => {
    console.log(req.params)
    const {idUser} = req.params 
    res.json({
        message: "UPDATE user success",
    })
}

const deleteUser = (req, res) => {
    console.log(req.params)
    const {idUser} = req.params 
    res.json({
        message: "DELETE user success",
        data: {
            id: idUser,
        }
    })
}
module.exports = {getAllUsers, createNewUser, updateUser, deleteUser}