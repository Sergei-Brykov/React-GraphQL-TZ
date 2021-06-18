const { Router } = require('express')
const router = Router()

router.use('/auth/registration', (res, req) => {
  console.log('')
})

router.use('/auth/login', (res, req) => {
  console.log('')
})


module.exports = router