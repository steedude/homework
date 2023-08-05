const getPool = require('../connection.js')
const mysql = require('mysql2/promise')

const getList = async (req, res) => {
  const page = parseInt(req.query.page ?? 1, 10)
  if (isNaN(page)) {
    req.query.page = 1
  } else {
    req.query.page = page
  }
  const size = parseInt(req.query.size ?? 10, 10)
  if (isNaN(size)) {
    req.query.size = 10
  } else {
    req.query.size = size
  }

  if (!req.query.title) {
    const [rows] = await getPool().query(
      'SELECT * FROM books_data.books LIMIT ?,?',
      [(req.query.page - 1) * req.query.size, req.query.size]
    )
    return res.json({ result: '成功', data: rows })
  } else {
    const [rows] = await getPool().query(
      'SELECT * FROM books_data.books WHERE `title` LIKE ? LIMIT ?,?',
      [
        `%${req.query.title}%`,
        (req.query.page - 1) * req.query.size,
        req.query.size,
      ]
    )
    return res.json({ result: '成功', data: rows })
  }
}

const addBook = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ msg: '缺少title' })
  }
  const [rows] = await getPool().query(
    'SELECT * FROM books_data.books WHERE `title` LIKE ?',
    [`${req.body.title}`]
  )
  if (rows.length != 0) {
    return res.status(400).json({ msg: 'title重複' })
  }
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'books_data',
    password: '123456',
    port: 3307,
  })
  await connection.execute(
    'INSERT INTO `books_data`.`books` (`author`,`country`,`imageLink`,`language`,`link`,`pages`,`title`,`year`) VALUES(?,?,?,?,?,?,?,?)',
    [
      req.body.author ?? null,
      req.body.country ?? null,
      req.body.imageLink ?? null,
      req.body.language ?? null,
      req.body.link ?? null,
      req.body.pages ?? null,
      req.body.title,
      req.body.year ?? null,
    ]
  )
  return res.json({ result: '成功' })
}

const editBook = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ msg: '缺少title' })
  }
  const [rows] = await getPool().query(
    'SELECT * FROM books_data.books WHERE `title`= ?',
    [`${req.params.title}`]
  )
  if (rows.length == 0) {
    return res.status(400).json({ msg: '查無title' })
  }
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'books_data',
    password: '123456',
    port: 3307,
  })

  await connection.execute(
    'UPDATE `books_data`.`books` SET `author`= ?, `country`= ?, `imageLink`= ?, `language`= ?, `link`= ?, `pages`= ?, `title`= ?, `year`= ? WHERE `id`= ?',
    [
      req.body.author ?? rows[0].author,
      req.body.country ?? rows[0].country,
      req.body.imageLink ?? rows[0].imageLink,
      req.body.language ?? rows[0].language,
      req.body.link ?? rows[0].link,
      req.body.pages ?? rows[0].pages,
      req.body.title,
      req.body.year ?? rows[0].year,
      rows[0].id,
    ]
  )
  return res.json({ result: '成功' })
}

const deleteBook = async (req, res) => {
  const [rows] = await getPool().query(
    'SELECT * FROM books_data.books WHERE `title`= ?',
    [`${req.params.title}`]
  )
  if (rows.length == 0) {
    return res.status(400).json({ msg: '查無title' })
  }
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'books_data',
    password: '123456',
    port: 3307,
  })

  await connection.execute(
    'DELETE FROM `books_data`.`books` WHERE `title`= ?',
    [req.params.title]
  )
  return res.json({ result: '成功' })
}

module.exports = {
  getList,
  addBook,
  editBook,
  deleteBook,
}
