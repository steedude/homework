const { Router } = require('express');
const booksCon = require('../controllers/booksCon');
const router = Router();
  
router.get('/books', booksCon.getList);
router.post('/books', booksCon.addBook);
router.put('/books/:title', booksCon.editBook);
router.delete('/books/:title', booksCon.deleteBook);
  
module.exports = router;

