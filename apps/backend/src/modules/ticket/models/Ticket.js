const mongoose = require('mongoose')

const mongoosePaginate = require('mongoose-paginate-v2')

const Schema = mongoose.Schema

const TicketSchema = new Schema({

 name: {type: String, required: true, unique: true, index: true}


}, { timestamps: true })

TicketSchema.plugin(mongoosePaginate)

const Ticket = mongoose.model('Platform', TicketSchema)

module.exports = Ticket
