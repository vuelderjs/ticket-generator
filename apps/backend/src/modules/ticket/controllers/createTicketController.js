import { createTicket } from "../services"

import {CREATE_TICKET, SUPER_TICKET} from '../../permissions'
import { checkPermissionFromToken } from "../../user/handlers/authorizationHandlers"

export const createTicketController = async (request, response) => {

    const {authorization} = request.headers
    let resultCheckPermissionFromToken = null
    try {
        resultCheckPermissionFromToken = checkPermissionFromToken(authorization, [CREATE_TICKET, SUPER_TICKET])
    } catch (error) {
        return response.status(500).json({
            title: 'Create User Controller error',
            message: error.message,
        })
    }

    if(resultCheckPermissionFromToken){
        const {type, project, sprint, title, details} = request.body
        try {
            const ticket = await createTicket({type, project, sprint, title, details})
            return response.status(200).json({
                messaage: 'Ticket created correctly',
                ticket
            })
        } catch (error) {
            return response.status(400).json({
                title: 'Create ticket controller error',
                error
            })
        }
    }else{
        return response.status(400).json({
            title: 'Unauthorized error',
            msg: 'The role does not allow to carry out the operation'
        })
    }
}