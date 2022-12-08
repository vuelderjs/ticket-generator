import { check } from 'express-validator'

import {
    inputRoleIsValidRole,
    validationResult,
    thatEmailDoesNotExist} from '../middlewares'

import {
    createUserController,
    fetchUsersController,
    findUserController,
    paginateUsersController,
    updateUserController,
    loginUserController,
    authenticationUserController } from '../controllers'

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
    thatEmailDoesNotExist, 
    inputRoleIsValidRole,
    validationResult, 
    createUserController)

router.post('/loginUser', 
    check('email').isEmail(), 
    check('password').isLength({min: 8}), 
    validationResult, 
    loginUserController)

router.post('/authUser', authenticationUserController)

//PUT

router.put('/updateUser', updateUserController)

module.exports = router