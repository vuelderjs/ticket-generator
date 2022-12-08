import { check } from 'express-validator'

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

router.post('/createTicket', 
    check('type').isString(),
    check('project').isString(),
    check('sprint').isNumeric(),
    check('title').isString(),
    createTicketController)

//PUT

router.put('/updateTicket', updateTicketController)

module.exports = router