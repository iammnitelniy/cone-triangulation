import Router from 'express'
import ConeController from "./ConeController.js";
const router = new Router()


router.post('/coneParams', ConeController.create)


export default router;