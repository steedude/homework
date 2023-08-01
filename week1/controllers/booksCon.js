const data = require('../books.json')
const getPool = require('../connection.js')
const mysql = require('mysql2/promise')

const getList = async (req, res) => {
  if (!req.query.title) {
    return res.status(400).json({ msg: '缺少title' })
  }

  // let searchResult = data.reduce((acc, cur) => {
  //   if (cur.title.includes(req.query.title)) {
  //     acc.push(cur)
  //   }
  //   return acc
  // }, [])
  // let sendData = searchResult.slice(
  //   (req.query.page - 1) * req.query.size,
  //   req.query.page * req.query.size
  // )
  // const searchResult = await connection.query('SELECT * FROM books_data.books')

  const [rows] = await getPool().query(
    'SELECT * FROM books_data.books WHERE `author` LIKE ?',
    [`%${req.query.title}%`]
  )
  return res.json({ result: '成功', data: rows })
}

const addBook = async (req, res) => {
  if (data.some((item) => item.title == req.body.title)) {
    res.status(400).json({ msg: 'title重複' })
  } else {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'books_data',
      password: '123456',
      port: 3307,
    })
    await connection.execute(
      'INSERT INTO `books_data`.`books` (`author`,`title`) VALUES(?,?)',
      [req.body.author, req.body.title]
    )
    res.json({ result: '成功' })
  }
}

const editBook = (req, res) => {
  let index = data.map((item) => item.title).indexOf(req.params.title)
  if (index != -1) {
    data[index] = req.body
    res.json({ result: '成功' })
  } else {
    res.status(400).json({ msg: '找不到書本' })
  }
}

const deleteBook = (req, res) => {
  let index = data.map((item) => item.title).indexOf(req.params.title)
  if (index != -1) {
    data.splice(index, 1)
    res.json({ result: '成功' })
  } else {
    res.status(400).json({ msg: '找不到書本' })
  }
}

module.exports = {
  getList,
  addBook,
  editBook,
  deleteBook,
}
