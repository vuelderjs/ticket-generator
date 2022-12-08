import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

import {
    CREATE_USER,
    UPDATE_USER,
    SHOW_USER,
    DELETE_USER,
    SUPER_USER
} from '../../permissions'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: false},
    role: {type: String, enum: [CREATE_USER, UPDATE_USER, SHOW_USER, DELETE_USER, SUPER_USER], required: true, unique: false}
}, { timestamps: true })

UserSchema.plugin(mongoosePaginate)

const User = mongoose.model('User', UserSchema)

module.exports = User