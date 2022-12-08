import { loginUser } from "../services"

export const loginUserController = async(request, response) => {
    const {email, password} = request.body
    try {
        const token = await loginUser({email, password})
        return response.status(200).json({
            title: 'Login User Controller',
            token
        })
    } catch (error) {
        return response.status(400).json({
            title: 'login User Controller - Error',
            error
        })
    } 
}