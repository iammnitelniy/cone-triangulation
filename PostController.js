import coneParamsSchema from "./coneParamsSchema.js";

class PostController {
    async create(req, res) {
        try {
            const {height, radius, segments} = req.body
            const coneParams = await coneParamsSchema.create({height, radius, segments})
            res.json(coneParams)


        }
        catch(e) {
            res.status(500).json(e)
        }
    }

    async get(req, res) {
        try {

        }
        catch(e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {

        }
        catch(e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {

        }
        catch(e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();