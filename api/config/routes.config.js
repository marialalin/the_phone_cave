const express = require('express')
const router = express.Router()
const phone = require("../controllers/phones.controller")

router.get('/phones', phone.list)
router.get('/phones/:id', phone.detail)


module.exports = router