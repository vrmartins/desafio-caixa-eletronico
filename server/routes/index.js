const express = require('express')
const withdrawRoutes = require('./withdraw')

const router = new express.Router()

router.use('/withdraw', withdrawRoutes)

module.exports = router
