const authMiddleware  = require('../Middlewares/authUser')
const Trade = require('../Models/tradeModel')
const TradingPlan = require('../Models/tradingPlanModel')

const saveTrade = async(req,res) => {
   const trade = await Trade.create(req.body);
   res.status(200).json({trade});
   
}

const getTrades = async(req,res) => {
const trades = await Trade.find({});
res.status(200).json({trades});
}

const deleteTrade = async(req,res) => {
    const tradeId = req.params;
    const deletetrade = await Trade.findOneAndDelete({_id: tradeId});
    if(!deletetrade) {
    res.status(404).json({deletetrade})
    }
    res.status(200).json({deletetrade})
}

const closeTrade = async(req,res) => {
    const tradeId = req.params;

    const closetrade = await Trade.findOneAndUpdate({_id: tradeId},req.body, {
        new: true,
        runValidators: true,
    })

    if(!closetrade){
        return res.status(400).json({closetrade});
    }

    res.status(200).json({closetrade})
}

const addTradingPlan = async(req,res) => {
    const addplan = await TradingPlan.create(req.body);
    res.status(200).json({addplan})
}

const addUpcomingTrades = async(req,res) => {
    
}


