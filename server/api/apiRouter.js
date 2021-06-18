const { Router } = require('express')
const router = Router()

router.use('/registration', (req, res) => {
  console.log('auth login')

  res.end()
})

router.use('/login', (res, req) => {
  console.log('login')
})


module.exports = router