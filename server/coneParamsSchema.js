import mongoose from "mongoose";

const coneParamsSchema = new mongoose.Schema({
    height: { type: Number, required: true },
    radius: { type: Number, required: true },
    segments: { type: Number, required: true }
});

export default mongoose.model('ConeParams', coneParamsSchema);