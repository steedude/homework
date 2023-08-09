// const getPool = require('../connection.js')
// const mysql = require('mysql2/promise')
const db = require('../models')
const Book = db.Book
const { Op } = require('sequelize')

const getList = async (req, res) => {
  // const page = parseInt(req.query.page ?? 1, 10)
  // if (isNaN(page)) {
  //   req.query.page = 1
  // } else {
  //   req.query.page = page
  // }
  // const size = parseInt(req.query.size ?? 10, 10)
  // if (isNaN(size)) {
  //   req.query.size = 10
  // } else {
  //   req.query.size = size
  // }

  // if (!req.query.title) {
  //   const test = await Book.findAll({ author: '露易莎' }, { limit: 2 })
  //   return res.json({ result: test })
  // }
  const test = await Book.findAll({
    where: { title: { [Op.like]: '%and%' } },
    limit: 2,
  })
  return res.json({ result: test })
}

const addBook = async (req, res) => {
  // if (!req.body.title) {
  //   return res.status(400).json({ msg: '缺少title' })
  // }

  // if (rows.length != 0) {
  //   return res.status(400).json({ msg: 'title重複' })
  // }
  try {
    const test = await Book.create({
      title: 't',
      author: '露易莎1',
    })
  } catch (error) {
    return res.json({ result: error.errors })
  }

  return res.json({ result: '成功' })
}

const editBook = async (req, res) => {
  // if (!req.body.title) {
  //   return res.status(400).json({ msg: '缺少title' })
  // }

  // if (rows.length == 0) {
  //   return res.status(400).json({ msg: '查無title' })
  // }
  const test = await Book.findAll({ author: '露易莎' })
  const final = await Book.update(
    { author: '星巴克' },
    { where: { id: test[0].id } }
  )
  return res.json({ result: final })
}

const deleteBook = async (req, res) => {
  // if (rows.length == 0) {
  //   return res.status(400).json({ msg: '查無title' })
  // }
  const final = await Book.destroy({ where: { id: 1 } })
  return res.json({ result: final })
}

module.exports = {
  getList,
  addBook,
  editBook,
  deleteBook,
}
