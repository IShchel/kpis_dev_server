const Router = require('express')
const router = new Router()
const mpe1gem = require ('./mpe1gem')
const r1022 = require ('./getFromR1022')

router.use('/mpe1gem', mpe1gem)
router.use('/r1022', r1022)


module.exports = router