import jwt from 'jsonwebtoken'
const { JWT_SECRET_KEY } = process.env

export const checkRoleFromToken = (token, roles = []) => {
    try {
        const user = jwt.verify(token, JWT_SECRET_KEY)
        if(roles.includes(user.role)) return true
        return false
    } catch (error) {
        throw new Error('Authorization handler error', error)
    }
}