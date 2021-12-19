const express = require('express');
const router = express.Router();
const game = require('./controllers/gameController')
const adm = require('./controllers/admController')

// GAME
router.get('/', game.index)
router.get('/suit-game', game.suitGame)

// DASHBOARD ADMIN
router.get('/admin-dashboard', adm.mainDashboard)
router.get('/biodata/:id', adm.biodata)
router.get('/create', adm.createForm)
router.post('/create', adm.createProcess)
router.get('/edit-data', adm.updateForm)
router.get('/update/:id', adm.updateItem)
router.post('/update/:id', adm.updateProcess)
router.get('/delete/:id', adm.delete)

module.exports = router;