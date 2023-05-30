const connection = require('../utils/db.js')

const getAllUsers = (req, res) => {
    const getQuery = 'SELECT * FROM users'

    connection.query(getQuery, (err, rows) => {
        if(err){
          res.json({
            message: 'Query failed'
          })
        }
        res.json({
          message:'Query success',
          data: rows
        })
      })

}

const createNewUser = (req, res) => {
    console.log(req.body)

    const postQuery = `INSERT INTO users (username, email, password, photoUrl) VALUES ('${req.body.username}', '${req.body.email}', '${req.body.password}', '${req.body.photoUrl}'); `

    connection.query(postQuery, (err, rows) => {
        if(err){
            res.json({
              message: 'Query failed'
            })
          }
          res.json({
            message:'Query success',
            data: rows
          })
      })
}

const updateUser = (req, res) => {
    console.log(req.params)
    const patchQuery = `UPDATE users
    SET username = '${req.body.username}', email = '${req.body.email}', password = '${req.body.password}', photoUrl = '${req.body.photoUrl}'
    WHERE id = '${req.params.id}';
    `

    connection.query(patchQuery, (err, rows) => {
        if(err){
            console.log(getQuery)
            res.json({
              message: 'Query failed'
            })
          }
          res.json({
            message:'Query success',
            data: rows
          })
      })
}

const deleteUser = (req, res) => {
    console.log(req.params)
    const deleteQuery = `DELETE FROM users
    WHERE id = '${req.params.id}';`

    connection.query(deleteQuery, (err, rows) => {
        if(err){
            console.log(getQuery)
            res.json({
              message: 'Query failed'
            })
          }
          res.json({
            message:'Query success',
            data: rows
          })
      })
}
module.exports = {getAllUsers, createNewUser, updateUser, deleteUser}