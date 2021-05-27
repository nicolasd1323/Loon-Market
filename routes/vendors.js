import { Router } from 'express'
import * as controllers from '../controllers/vendors.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/vendors', controllers.getVendors)
router.get('/vendors/:id', controllers.getVendor)
router.post('/vendors', restrict, controllers.createVendor)
router.put('/vendors/:id', restrict, controllers.updateVendor)
router.delete('/vendors/:id', restrict, controllers.deleteVendor)

export default router