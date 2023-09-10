// const getPool = require('../connection.js')
// const mysql = require('mysql2/promise')
const db = require('../models')
const Book = db.Book
const { Op } = require('sequelize')
const Redis = require('ioredis')
const Author = db.Author
const redis = new Redis({
  port: 6379, // Redis port
  host: '172.17.0.2', // Redis host
  db: 0, // Defaults to 0
})

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
  const key = `getList_${req.query.title}_${req.query.page}_${req.query.size}`
  const cache = await redis.get(key)
  if (cache) {
    return res.json({ result: JSON.parse(cache) })
  }
  const resultData = await Book.findAll({
    where: { title: { [Op.like]: `%${req.query.title}%` } },
    limit: 2,
    include: [Author],
  })
  await redis.set(key, JSON.stringify(resultData), 'EX', 1000)
  return res.json({ result: resultData })
}

const addBook = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ msg: '缺少title' })
  }
  const rows = await Book.findAll({
    where: { title: { [Op.eq]: req.query.title } },
  })
  if (rows.length != 0) {
    return res.status(400).json({ msg: 'title重複' })
  }
  try {
    const { author, country, imageLink, language, link, pages, title, year } =
      req.body
    let authorData = await Author.findOne({ where: { name: author } })
    if (!authorData) {
      authorData = await Author.create({
        name: author,
        country,
        birthday: null,
      })
    }
    await Book.create({
      author: authorData.name,
      country: authorData.country,
      imageLink,
      language,
      link,
      pages,
      title,
      year,
      authorId: authorData.id,
    })
    return res.json({ result: '成功' })
  } catch (e) {
    return res.json({ result: e.errors })
  }
}

const editBook = async (req, res) => {
  if (!req.body.title || !req.params.title) {
    return res.status(400).json({ msg: '缺少title' })
  }
  const rows = await Book.findAll({
    where: { title: { [Op.eq]: req.params.title } },
  })
  if (rows.length == 0) {
    return res.status(400).json({ msg: '查無title' })
  }
  try {
    const { author, country, imageLink, language, link, pages, title, year } =
      req.body
    let authorData = await Author.findOne({ where: { name: author } })
    if (!authorData) {
      authorData = await Author.create({
        name: author,
        country,
        birthday: null,
      })
    }
    const final = await Book.update(
      {
        author: authorData.name,
        country: authorData.country,
        imageLink,
        language,
        link,
        pages,
        title,
        year,
        authorId: authorData.id,
      },
      { where: { id: rows[0].id } }
    )
    return res.json({ result: final })
  } catch (e) {
    return res.json({ result: e.errors })
  }
}

const deleteBook = async (req, res) => {
  if (!req.params.title) {
    return res.status(400).json({ msg: '缺少title' })
  }
  const rows = await Book.findAll({
    where: { title: { [Op.eq]: req.params.title } },
  })
  if (rows.length == 0) {
    return res.status(400).json({ msg: '查無title' })
  }
  const final = await Book.destroy({ where: { id: rows[0].id } })
  return res.json({ result: final })
}

module.exports = {
  getList,
  addBook,
  editBook,
  deleteBook,
}
