const mongoose = require('mongoose')

const mongoosePaginate = require('mongoose-paginate-v2')

const Schema = mongoose.Schema

const TicketSchema = new Schema({

    number: {type: Number, required: true, unique: true, index: true},
    type: {type: String, required: true, unique: false, index: false},
    project: {type: String, required: true, unique: false, index: false},
    sprint: {type: Number, required: true, unique: false, index: false},
    state: {type: String, enum: ['NEW', 'PROCESS', 'DEVELOPED', 'QA REQUIRED', 'PRODUCTION'], unique: false, required: true, default:'NEW', index: false},
    title: {type: String, required: true, unique: false, index: false},
    details: {type: String, required: false, unique: false, index: false}
}, { timestamps: true })

TicketSchema.plugin(mongoosePaginate)

const Ticket = mongoose.model('Ticket', TicketSchema)

module.exports = Ticket
