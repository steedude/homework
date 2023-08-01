// const mysql = require('mysql2/promise')

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'books_data',
//   password: '123456',
//   port: 3307,
// })

// exports.connection = connection
const mysql = require('mysql2/promise')
var pool
module.exports = function getPool() {
  if (pool) {
    return pool
  }
  const config = {
    host: 'localhost',
    user: 'root',
    database: 'books_data',
    password: '123456',
    port: 3307,
  }
  return mysql.createPool(config)
}
