import express from 'express'
import {DefaultLogger as winston} from '@dracul/logger-backend'

export class Server{
    constructor(port, apiRoute){
        this.port = port
        this.apiRoute = apiRoute
        this.app = null
    }

    init(){
        this.app = express()
    }

    connectToDataBase(){
        winston.info('Database is connected')
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