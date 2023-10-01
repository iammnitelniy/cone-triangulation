import coneParamsSchema from "./coneParamsSchema.js";
import ConeService from "./ConeService.js"

class ConeController {
    async create(req, res) {
        try {

            const cone = await ConeService.create(req.body)

         return   {
                resultCode: 1,
                messages: ['any', 'some'],
                data: res.json(cone),
                fieldsErrors: {error: 'error', field: 'any'},
            }




        } catch (e) {
            res.status(500).json(e)
        }
    }

    async get(req, res) {
        try {
            const cone = await ConeService.get(req.params.id)
            return res.json(cone)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const cone = await ConeService.delete( req.params.id)
            return res.json(cone)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new ConeController();