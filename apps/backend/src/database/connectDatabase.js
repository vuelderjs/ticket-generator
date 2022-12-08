import mongoose from 'mongoose'
import {DefaultLogger as winston} from '@dracul/logger-backend'

const {MONGO_DB} = process.env

export const connectToDatabase = async() => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(MONGO_DB)
        winston.info('Database is connected')
    } catch (error) {
        winston.error('error in connect to database -> ' + error)
    }
}