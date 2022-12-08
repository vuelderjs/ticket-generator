import { checkPermissionFromToken } from '../handlers/authorizationHandlers'
import {createUser} from '../services'

import {CREATE_USER, SUPER_USER} from '../../permissions'

export const createUserController = async(request, response) => {
    const {authorization} = request.headers
    let resultCheckPermissionFromToken = null
    try {
        resultCheckPermissionFromToken = checkPermissionFromToken(authorization, [CREATE_USER, SUPER_USER])
    } catch (error) {
        return response.status(500).json({
            title: 'Create User Controller error',
            message: error.message,
        })
    }
    

    
    if(resultCheckPermissionFromToken){
        const {email, password, role} = request.body
        try {
            const user = await createUser({email, password, role})  
            return response.status(200).json({
                title: 'User created Correctly',
                data: user
            }) 
        } catch (error) {
            return response.status(500).json({
                title: 'Create User Controller',
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