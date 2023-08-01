// const data = require('../books.json')

const checkGetList = (req, res, next) => {
  const page = parseInt(req.query.page ?? 1, 10)
  if (isNaN(page)) {
    req.query.page = 1
  }
  const size = parseInt(req.query.size ?? 10, 10)
  if (isNaN(size)) {
    req.query.size = 10
  }
  next()
}

const checkAll = (req, res, next) => {
  // if (
  //   Object.keys(data[0]).sort().join(',') !==
  //   Object.keys(req.body).sort().join(',')
  // ) {
  //   res.status(400).json({ msg: 'key有多或少' })
  // } else if (Object.values(req.body).some((item) => !item)) {
  //   res.status(400).json({ msg: 'value有空值' })
  // } else if (
  //   !Number.isInteger(parseInt(req.body.pages, 10)) ||
  //   !Number.isInteger(parseInt(req.body.year, 10))
  // ) {
  //   res.status(400).json({ msg: 'pages及year有非數字或整數' })
  // } else {
  //   req.body.pages = parseInt(req.body.pages, 10)
  //   req.body.year = parseInt(req.body.year, 10)
  //   next()
  // }
  next()
}

module.exports = {
  checkGetList,
  checkAll,
}
