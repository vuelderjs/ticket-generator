import { authenticationUser } from "../services"

export const authenticationUserController = async(request, response) => {
    const { authorization } = request.headers
    try {
        const user = authenticationUser(authorization)
        return response.status(200).json({
            title: 'Authentication User Controller',
            user
        })        
    } catch (error) {
        return response.status(400).json({
            title: 'Authentication User Controller error',
            error
        })
    }

}