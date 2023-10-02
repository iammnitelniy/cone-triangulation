import Router from 'express'
import ConeController from "./ConeController.js";
const router = new Router()


router.post('/coneParams', ConeController.create)
router.get('/coneParams', ConeController.getAll)
router.get('/coneParams/:id', ConeController.get)
router.put('/coneParams')
router.delete('/coneParams/:id', ConeController.delete)


export default router;