import {Ticket} from '../models'

export const createTicket = async ({type, project, sprint, title, details = ''}) => {
    try{
        let number = await Ticket.find({}).count()
        number ++
        const state = 'NEW'
    
        const ticket = new Ticket({
            number,
            type,
            project,
            sprint,
            state,
            title,
            details
        })
    
        return await ticket.save()
    }catch(error){
        throw new Error('Ticket not found')
    }
}

export const updateTicket = async (number, {type='', project='', sprint='', state='', title='', details=''}) => {

    const ticketDataReceived = {}

    if(type) ticketDataReceived.type = type
    if(project) ticketDataReceived.project = project
    if(sprint) ticketDataReceived.sprint = sprint
    if(state) ticketDataReceived.state = state
    if(title) ticketDataReceived.title = title
    if(details) ticketDataReceived.details = details

    try {
        return await Ticket.findOneAndUpdate({number}, ticketDataReceived, {
            new: true
        })
    } catch (error) {
        throw new Error('Ticket not found')
    }

}

export const findTicketByNumber = async (number) => {
    try {
        return await Ticket.findOne({number})
    } catch (error) {
        throw new Error('Ticket not found')
    }
}

export const fetchTickets = async () => {
    try {
        return await Ticket.find({})
    } catch (error) {
        throw new Error('Tickets not found')
    }
}

export const fetchTicketsByFilter = async ({number=0, type='', project='', sprint='', state=''}) => {

    const filter = {}

    if(number) filter.number = number
    if(type) filter.type = type
    if(project) filter.project = project
    if(sprint) filter.sprint = sprint
    if(state) filter.state = state

    return await Ticket.find(filter)

}