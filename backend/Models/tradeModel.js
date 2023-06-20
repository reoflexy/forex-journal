const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({
pair: {
    type: String,
    required: true,
},
action: {
    type: String,
    required: true,
},
tradeType: {
    type: String,
    required: true,
},
lotSize: {
    type: String,
    required: true,
},
entryPrice: {
    type: String,
    required: true,
},
stopLoss: {
    type: String,
    required: true,
},
takeProfit: {
    type: String,
    required: false,
},
expectedOutcome: {
    type: String,
    required: true,
},
actualOutcome: {
    type: String,
    required: false,
},
profit: {
    type: String,
    required: false,
},
finalOutcome: {
    type: String,
    required: false
},
entryDate: {
    type: String,
    required: true,
}


})

module.exports = mongoose.model('Trades',tradeSchema)