import {
    createTicketController,
    fetchTicketsController,
    findTicketController,
    paginateTicketsController,
    updateTicketController } from '../controllers'

import { Router } from 'express'

const router = Router()



//GET

router.get('/findTicket', findTicketController)
router.get('/fetchTickets', fetchTicketsController)
router.get('/paginateTickets', paginateTicketsController)

//POST

router.post('/createTicket', createTicketController)

//PUT

router.put('/updateTicket', updateTicketController)

module.exports = router