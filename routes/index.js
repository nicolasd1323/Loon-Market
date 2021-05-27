import { Router } from 'express'
import vendorsRoutes from './vendors.js'
import usersRoutes from './users.js'

//table of contents for all of our route

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRoutes)
router.use('/', vendorsRoutes)

export default router
