const express= require('express')
const router = express.Router()

const {saveTrade,getTrades,deleteTrade,
    closeTrade,addTradingPlan,getTradingPlan,addUpcomingTrades} = require('../Controllers/methods') 

router.route('/register').post()
router.route('/login').post()
router.route('/addtrade').post(saveTrade)
router.route('/gettrades').get(getTrades)
router.route('/deletetrade').delete(deleteTrade)
router.route('/closetrade').patch(closeTrade)
router.route('/addtradeplan').post(addTradingPlan)
router.route('/gettradeplan').get(getTradingPlan)
router.route('/addupcoming').post(addUpcomingTrades)
router.route('/getequity').get()


module.exports = router