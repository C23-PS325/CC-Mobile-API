const connection = require('../utils/db.js')
const CryptoJS = require('crypto-js');


const encryptWithAES = (text) => {
  const passphrase = '123';
  return CryptoJS.AES.encrypt(text, passphrase).toString();
};

const decryptWithAES = (ciphertext) => {
  const passphrase = '123';
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

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

    const postQuery = `INSERT INTO users (username, email, password, photoUrl) VALUES ('${req.body.username}', '${req.body.email}', '${encryptWithAES(req.body.password)}', '${req.body.photoUrl}'); `

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
    SET username = '${req.body.username}', email = '${req.body.email}', password = '${encryptWithAES(req.body.password)}', photoUrl = '${req.body.photoUrl}'
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