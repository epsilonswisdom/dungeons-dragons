const router = require('express').Router()
const playersCtrl = require('../controllers/players.js')

//controller functions to be exported
router.post('/', playersCtrl.create)

module.exports = router