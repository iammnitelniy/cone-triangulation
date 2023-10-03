import ConeService from "./ConeService.js"

class ConeController {
    async create(req, res) {
        try {
            const cone = await ConeService.create(req.body);
            return res.json(cone)

        } catch (e) {
            res.status(500).json(e);
        }
    }


}

export default new ConeController();

