const express= require('express')
const router = express.Router()

const {} = require('../Controllers/methods')
router.route('/register').post()
router.route('/login').post()
router.route('/addtrade').post()
router.route('/gettrades').get()
router.route('/deletetrade').delete()
router.route('/closetrade').post()
router.route('/addtradeplan').post()
router.route('/addupcoming').post()
router.route('/getequity').get()


module.exports = router