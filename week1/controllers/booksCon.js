const data = require('../books.json')

const getList = (req, res) => {
  if (!req.query.title) {
    res.status(400).json({ msg: '缺少title' })
  } else {
    let searchResult = data.reduce((acc, cur) => {
      if (cur.title.includes(req.query.title)) {
        acc.push(cur)
      }
      return acc
    }, [])
    let sendData = searchResult.slice(
      (req.query.page - 1) * req.query.size,
      req.query.page * req.query.size
    )
    res.send(sendData).json({ result: '成功' })
  }
}

const addBook = (req, res) => {
  if (data.some((item) => item.title == req.body.title)) {
    res.status(400).json({ msg: 'title重複' })
  } else {
    data.push(req.body)
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
