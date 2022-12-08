import { findUserByEmail } from "../services"

export const thatEmailDoesNotExist = async(request, response, next) => {
    const {email} = request.body
    const DoesExistEmail = await findUserByEmail({email})
    if(DoesExistEmail){
        return response.status(400).json({
            message: 'This email has exist'
        })
    }
    next()
}