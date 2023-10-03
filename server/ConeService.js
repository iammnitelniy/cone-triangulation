import coneParamsSchema from "./coneParamsSchema.js";


class ConeService {

    async create(cone) {

        const createdCone = await coneParamsSchema.create(cone)
        return createdCone

    }

}


export default new ConeService();