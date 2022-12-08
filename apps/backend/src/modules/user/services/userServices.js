import {User} from '../models'
import bcrypt from 'bcrypt'
const {BCRYPT_SALT} = process.env

export const createUser = async({email, password, role}) => {
    password = bcrypt.hashSync(password, Number(BCRYPT_SALT))
    const user = new User({email, password, role})
    return await user.save()
}

export const findUserByEmail = async({email}) => {
    const user = User.findOne({email})
    return user ? user : false
}