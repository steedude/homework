const express = require('express')
const app = express()
const port = 3000
const myRoute = require('./routes/index.js');
const booksMid = require('./middlewares/booksMid.js');

app.use(express.json());

app.get('/books', booksMid.checkGetList)
app.post('/books', booksMid.checkAll)
app.put('/books/:title', booksMid.checkAll)

app.use('/', myRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})