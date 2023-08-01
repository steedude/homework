const express = require('express')
const app = express()
const port = 3000
const myRoute = require('./routes/index.js')
// const mysql = require('mysql2/promise')
const booksMid = require('./middlewares/booksMid.js')

// async function mysqlConnection() {
//   const connection = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'books_data',
//     password: '123456',
//     port: 3307,
//   })
//   return connection
// }

app.use(express.json())

app.get('/books', booksMid.checkGetList)
app.post('/books', booksMid.checkAll)
app.put('/books/:title', booksMid.checkAll)

app.use('/', myRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// const connection = mysqlConnection()
// module.exports = { connection }
