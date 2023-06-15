const express = require("express")
const usersController = require("../controller/users")
const router = express.Router()

// CREATE
router.post("/", usersController.createNewUser)

//READ
router.get("/", usersController.getAllUsers)
router.get("/:username", usersController.getSpecifiedUser)
router.post("/:username", usersController.postSpecifiedUser)

//UPDATE
router.patch("/:username", usersController.updateUser)

//DELETE
router.delete("/:id", usersController.deleteUser)


module.exports = router