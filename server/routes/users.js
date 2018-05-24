const router = require('express').Router()
const controllerUser = require('../controllers/c_user')
const { cekAdminRole } = require('../middleware/auth')

router.get('/', (req, res) => {
  res.send('masuk users gan!!!')
})
router.post('/registeruser', controllerUser.register)
router.post('/signin', controllerUser.signIn)

module.exports = router