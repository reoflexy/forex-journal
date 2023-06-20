const mongoose = require('mongoose')

const tradePlanModel = mongoose.Schema({
    plan: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Trading Plan',tradePlanModel)