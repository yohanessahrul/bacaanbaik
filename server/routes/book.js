const router = require('express').Router()
const controllerBook = require('../controllers/c_book')
const { cekAdminRole } = require('../middleware/auth')
const { sendUploadToGCS, uploadMem } = require('../middleware/images')

router.get('/', (req, res) => {
  res.send('masuk books gan!!!')
})
router.post('/savebook', uploadMem.single('avatar'), sendUploadToGCS, controllerBook.saveBook)
router.get('/list', controllerBook.list)
router.delete('/hapus/:id', controllerBook.hapus)

module.exports = router