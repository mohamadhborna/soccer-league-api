const {Router} = require('express')
const playerController = require('../controllers/player.controller')

const router = new Router()

router.post('/' , playerController.create)
router.get('/' , playerController.findAll)
router.get('/specifics' , playerController.findspecificPlayers)
router.get('/:id' , playerController.findOne)
router.put('/:id' , playerController.update)


module.exports = router