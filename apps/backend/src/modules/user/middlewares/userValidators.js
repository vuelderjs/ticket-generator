import { validationResult as errorsValidation } from 'express-validator'

import {
    CREATE_USER,
    UPDATE_USER,
    SHOW_USER,
    DELETE_USER,
    SUPER_USER
} from '../../permissions'


export const inputRoleIsValidRole = (request, response, next) => {
    const { role } = request.body

    if(['ADMIN_ROLE', 'DEFAULT_ROLE', 'VUELDER_ROLE', 'BRICKERZ_ROLE'].includes(role)) return next()
    
    return response.status(400).json({
        error: 'Role not found'
    })
}

export const validationResult = (request, response, next) => {
    const errors = errorsValidation(request)
    if(!errors.isEmpty()){
        return response.status(400).json({
            errors: errors.array()
        })
    }
    return next()
}