const mongoose = require('mongoose')

const upcomingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tradeType: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: false
    },
    tradeDate: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Upcoming Trade',upcomingSchema)