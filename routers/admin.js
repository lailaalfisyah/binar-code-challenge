const express = require('express');
const router = express.Router();
const admController = require('../controllers/admController')

router.get('/', admController.loginPage)
router.post('/', admController.loginProcess)

module.exports = router