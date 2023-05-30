const express = require("express")
const usersController = require("../controller/users")
const router = express.Router()

// CREATE
router.post("/", usersController.createNewUser)

//READ
router.get("/", usersController.getAllUsers
)

//UPDATE
router.patch("/:id", usersController.updateUser)

//DELETE
router.delete("/:id", usersController.deleteUser)


module.exports = router