import coneParamsSchema from "./coneParamsSchema.js";


class ConeService {

    async create(cone) {

        const createdCone = await coneParamsSchema.create(cone)
        return createdCone

    }

    async get(coneId) {
        if(!coneId) {
            throw new Error('No ID')
        }
        const cone = await coneParamsSchema.findById(coneId)
        return cone

    }

    async update(req, res) {
        try {

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(coneId) {

            if(!coneId) {
                throw new Error('No ID')

            }
        const deletedCone = await coneParamsSchema.findByIdAndDelete(coneId)
        return deletedCone
    }


}


export default new ConeService();