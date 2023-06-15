const connection = require('../utils/db.js')
const CryptoJS = require('crypto-js');


function caesarEncrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  }
  
  function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, 26 - shift);
  }

const getAllUsers = (req, res) => {
    const getQuery = 'SELECT * FROM users'

    connection.query(getQuery, (err, rows) => {
        if(err){
          res.json({
            message: 'Query failed: '+err
          })
        }
        res.json({
          message:'Query success',
          data: rows
        })
      })
}


const getSpecifiedUser = (req, res) => {
    const getQuery = `SELECT * FROM users WHERE username = '${req.params.username}';`
    connection.query(getQuery, (err, rows) => {
        if(err){
          res.json({
            message: 'Query failed: '+err
          })
        }
        res.json({
          message:'Query success',
          data: rows
        })
      })
}



const postSpecifiedUser = (req, res) => {
    const postQuery = `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${caesarEncrypt(req.body.password)}'`

    connection.query(postQuery, (err, rows) => {
      if(err){
     res.json({
       message: 'Query failed: '+err
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

    const postQuery = `INSERT INTO users (username, email, password, photoUrl) VALUES ('${req.body.username}', '${req.body.email}', '${caesarEncrypt(req.body.password)}', '${req.body.photoUrl}'); `

    connection.query(postQuery, (err, rows) => {
           if(err){
          res.json({
            message: 'Query failed: '+err
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
    SET username = '${req.body.username}', email = '${req.body.email}', password = '${caesarEncrypt(req.body.password)}', photoUrl = '${req.body.photoUrl}'
    WHERE username = '${req.params.username}';
    `

    connection.query(patchQuery, (err, rows) => {
          if(err){
          res.json({
            message: 'Query failed: '+err
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
          res.json({
            message: 'Query failed: '+err
          })
        }
          res.json({
            message:'Query success',
            data: rows
          })
      })
}
module.exports = {getAllUsers, createNewUser, updateUser, deleteUser, postSpecifiedUser, getSpecifiedUser}