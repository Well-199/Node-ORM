const { Router } = require("express") 
const ApiController = require('../controllers/apiController') 

const router = Router()

router.get('/ping', ApiController.ping)

router.get('/random', ApiController.random)

router.get('/nome/:nome', ApiController.nome)

router.post('/frases', ApiController.createPhrase)

module.exports = router