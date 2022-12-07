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

router.post('/createUser', createUserController)

//PUT

router.put('/updateUser', updateUserController)

module.exports = router