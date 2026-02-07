import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
    title: {
        en: { type: String, required: true },
        az: { type: String, required: true },
        fr: { type: String, required: true },
    },
    description: {
        en: { type: String, required: true },
        az: { type: String, required: true },
        fr: { type: String, required: true },
    },
    image: {
        type: String,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
    },
    yearDuration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export const House = mongoose.models.House || mongoose.model('House', HouseSchema);