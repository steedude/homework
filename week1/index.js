const express = require('express')
const app = express()
const port = 3000
const myRoute = require('./routes/index.js')

app.use(express.json())
app.use('/', myRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
