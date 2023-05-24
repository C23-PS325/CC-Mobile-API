const express = require("express")
const usersController = require("../controller/users")
const router = express.Router()

router.get("/", usersController.getAllUsers
)

router.post("/", usersController.createNewUser)


module.exports = router