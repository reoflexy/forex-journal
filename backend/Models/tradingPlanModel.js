const mongoose = require('mongoose')

const tradePlanModel = mongoose.Schema({
    pair: {
        type: String,
        required: true
    },
    stopLoss: {
        type: String,
        required: true
    },
    maxTradesPerDay: {
        type: String,
        required: false
    },
    ppt: {
        type: String,
        required: true
    },
    news: {
        type: String,
        required: false
    },
    TA: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Trading Plan',tradePlanModel)