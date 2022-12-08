import jwt from 'jsonwebtoken'
import {User} from '../models'
import bcrypt from 'bcrypt'

const { JWT_SECRET_KEY, JWT_EXPIRATE_IN } = process.env

export const authenticationUser = (token) => {
    try {
        const user = jwt.verify(token, JWT_SECRET_KEY)
        return user
    } catch (error) {
        throw new Error('Authentication User error -> ', error)
    }

}

export const loginUser = async({email, password}) => {
    const user = await User.findOne({ email: email })
    if(user){
        
        const passwordValidation = bcrypt.compareSync(password, user.password)

        if(passwordValidation){

            const authToken = jwt.sign({
                email: user.email,
                role: user.role
            }, JWT_SECRET_KEY, {
                expiresIn: JWT_EXPIRATE_IN
            })

            return authToken
        }
    } 
    throw new Error('Invalid Credentials')
}