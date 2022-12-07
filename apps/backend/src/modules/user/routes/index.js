import { check } from 'express-validator'

import {
    inputRoleIsValidRole,
    validationResult} from '../middlewares'

import {
    createUserController,
    fetchUsersController,
    findUserController,
    paginateUsersController,
    updateUserController } from '../controllers'

import { Router } from 'express'

const router = Router()



//GET

router.get('/findUser', findUserController)
router.get('/fetchUsers', fetchUsersController)
router.get('/paginateUsers', paginateUsersController)

//POST

router.post('/createUser', 
    check('email').isEmail(), 
    check('password').isLength({min: 8}), 
    inputRoleIsValidRole,
    validationResult, 
    createUserController)

//PUT

router.put('/updateUser', updateUserController)

module.exports = router