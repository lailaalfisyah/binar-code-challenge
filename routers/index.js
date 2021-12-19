const express = require('express');
const router = express.Router();
const game = require('./game')
const admin = require('./admin')

router.use('/login', game)
router.use('/admin-login', admin)

module.exports = router