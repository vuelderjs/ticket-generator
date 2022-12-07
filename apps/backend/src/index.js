require('dotenv').config();

import { Server } from "./server";

const {
    PORT,
    API_ROUTE
} = process.env

const server = new Server(PORT, API_ROUTE)

server.init()

server.connectToDataBase()

server.routesManagement()

server.start()