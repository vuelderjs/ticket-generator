import jwt from 'jsonwebtoken'
const { JWT_SECRET_KEY } = process.env

export const checkPermissionFromToken = (token, permissions = []) => {
    try {
        const user = jwt.verify(token, JWT_SECRET_KEY)
        const rolePermissions = require('../../roles')
        let result = false
        permissions.forEach(permission => {
            if(rolePermissions[user.role].includes(permission)) result = true
        })
        return result
    } catch (error) {
        throw new Error('Authorization handler error', error)
    }
}