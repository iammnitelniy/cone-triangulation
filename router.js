import Router from 'express'
import coneParamsSchema from "./coneParamsSchema.js";
import PostController from "./PostController.js";

const router = new Router()


router.post('/conesParams', PostController.create)
router.get('/conesParams')
router.get('/conesParams/:id')
router.put('/conesParams')
router.delete('/conesParams/:id')


export default router;