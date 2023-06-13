const express = require("express")
const scriptsController = require("../controller/scripts")
const router = express.Router()

//READ
router.get("/", scriptsController.getAllScripts)
router.get("/:id", scriptsController.getSpecifiedScript)

//DELETE
router.delete("/:id", scriptsController.deleteScript)


module.exports = router