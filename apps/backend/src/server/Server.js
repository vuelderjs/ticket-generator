import express from 'express'
import {DefaultLogger as winston} from '@dracul/logger-backend'
import { connectToDatabase } from '../database'

export class Server{
    constructor(port, apiRoute){
        this.port = port
        this.apiRoute = apiRoute
        this.app = null
    }

    init(){
        require('../database')
        this.app = express()
        this.app.use(express.json())
    }

    async connectToDataBase(){
        await connectToDatabase()
    }

    routesManagement(){
        this.app.get(this.apiRoute + '/ping', (req, res) => res.send('pong'))
        this.app.use(this.apiRoute + '/ticket', require('../modules/ticket/routes'))
        this.app.use(this.apiRoute + '/user', require('../modules/user/routes'))
    }

    start(){
        this.app.listen(this.port, ()=>{
            winston.info(`Server listening at port ${this.port}`)
        })
    }
}