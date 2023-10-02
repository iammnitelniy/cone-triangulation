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

    async getAll(req, res) {
        try {
            const cone = await ConeService.getAll()
            return res.json(cone)
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

// function computeConeTriangulation(cone) {
//     const { height, radius, segments } = cone;
//     const triangulation = [];
//
//     // Вычисляем координаты вершины конуса (A)
//     const vertexA = { x: 0, y: 0, z: height };
//
//     // Создаем треугольники для боковой поверхности конуса
//     for (let i = 0; i < segments; i++) {
//         const angle1 = (2 * Math.PI * i) / segments;
//         const angle2 = (2 * Math.PI * (i + 1)) / segments;
//
//         const nodeP1 = { x: radius * Math.cos(angle1), y: radius * Math.sin(angle1), z: 0 };
//         const nodeP2 = { x: radius * Math.cos(angle2), y: radius * Math.sin(angle2), z: 0 };
//
//         // Создаем треугольник для текущего сегмента
//         const triangle = [vertexA, nodeP1, nodeP2];
//         triangulation.push(triangle);
//     }
//
//     return triangulation;
// }