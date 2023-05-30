const logRequest = (req, res, next) => {
    console.log("Terjadi req ke: ", req.path)
    next()
}

module.exports = logRequest