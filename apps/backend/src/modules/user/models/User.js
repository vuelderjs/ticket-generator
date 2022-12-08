import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

import {
    ADMIN_ROLE,
    DEFAULT_ROLE,
    VUELDER_ROLE,
    BRICKERZ_ROLE
} from '../../roles'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: false},
    role: {type: String, enum: [ADMIN_ROLE, DEFAULT_ROLE, VUELDER_ROLE, BRICKERZ_ROLE], required: true, unique: false}
}, { timestamps: true })

UserSchema.plugin(mongoosePaginate)

const User = mongoose.model('User', UserSchema)

module.exports = User