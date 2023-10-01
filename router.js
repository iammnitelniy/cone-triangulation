import Router from 'express'
import coneParamsSchema from "./coneParamsSchema.js";
import PostController from "./ConeController.js";

const router = new Router()


router.post('/coneParams', PostController.create)
router.get('/coneParams')
router.get('/coneParams/:id', PostController.get)
router.put('/coneParams')
router.delete('/coneParams/:id', PostController.delete)


export default router;