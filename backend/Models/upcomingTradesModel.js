const mongoose = require('mongoose')

const upcomingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})