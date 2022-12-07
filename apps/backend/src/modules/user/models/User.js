const mongoose = require('mongoose')

const mongoosePaginate = require('mongoose-paginate-v2')

const Schema = mongoose.Schema

const UserSchema = new Schema({

 name: {type: String, required: true, unique: true, index: true}


}, { timestamps: true })

UserSchema.plugin(mongoosePaginate)

const User = mongoose.model('Platform', UserSchema)

module.exports = User