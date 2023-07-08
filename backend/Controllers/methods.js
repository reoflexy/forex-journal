const authMiddleware  = require('../Middlewares/authUser')
const Trade = require('../Models/tradeModel')
const TradingPlan = require('../Models/tradingPlanModel')
const UpcomingTrade = require('../Models/upcomingTradesModel')

const saveTrade = async(req,res) => {
   const trade = await Trade.create(req.body);
   res.status(200).json({message: 'success',data: trade});
   
}

const getTrades = async(req,res) => {
const trades = await Trade.find({});
res.status(200).json({data:trades,message: 'success'});
}

const deleteTrade = async(req,res) => {
    const tradeId = req.query.tradeId;
    const deletetrade = await Trade.findOneAndDelete({_id: tradeId});
    if(!deletetrade) {
    res.status(404).json({deletetrade})
    }
    res.status(200).json({data: deletetrade, message: 'success'})
}

const closeTrade = async(req,res) => {
    const tradeId = req.query.tradeId;

    const closetrade = await Trade.findOneAndUpdate({_id: tradeId},req.body, {
        new: true,
        runValidators: true,
    })

    if(!closetrade){
        return res.status(400).json({data: closetrade, message: 'success'});
    }

    res.status(200).json({closetrade})
}

const addTradingPlan = async(req,res) => {
    const addplan = await TradingPlan.create(req.body);
    res.status(200).json({addplan})
}

const getTradingPlan = async(req,res) => {
    const getplan = await TradingPlan.find({})
    res.status(200).json({data:getplan,message: 'success'});
}

const addUpcomingTrades = async(req,res) => {
const upcomingtrade = await UpcomingTrade.create(req.body);
res.status(200).json({data:upcomingtrade, message: 'success'});
}

const getEquity = async(req,res) => {

}

module.exports = {
    saveTrade,
    getTrades,
    deleteTrade,
    closeTrade,
    addTradingPlan,
    getTradingPlan,
    addUpcomingTrades,
    getEquity
}


