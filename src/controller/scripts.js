const connection = require('../utils/db.js')
const CryptoJS = require('crypto-js');


const getAllScripts = (req, res) => {
    const getQuery = 'SELECT * FROM script'

    connection.query(getQuery, (err, rows) => {
        if(err){
          res.send({
            message: 'Query failed: '+err
          })
        }
        res.send({
          message:'Query success',
          data: rows
        })
      })
}


const getSpecifiedScript = (req, res) => {
    const getQuery = `SELECT * FROM script WHERE id = '${req.params.id}';`
    connection.query(getQuery, (err, rows) => {
        if(err){
          res.send({
            message: 'Query failed: '+err
          })
        }
        res.send({
          message:'Query success',
          data: rows
        })
      })
}

const deleteScript = (req, res) => {
    console.log(req.params)
    const deleteQuery = `DELETE FROM script
    WHERE id = '${req.params.id}';`

    connection.query(deleteQuery, (err, rows) => {
           if(err){
          res.send({
            message: 'Query failed: '+err
          })
        }
          res.send({
            message:'Query success',
            data: rows
          })
      })
}
module.exports = {getAllScripts,  getSpecifiedScript, deleteScript}