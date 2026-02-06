import mongoose from 'mongoose';

const HouseSchema = new mongoose.Schema({
    // Multi-language Title
    title: {
        en: { type: String, required: true },
        az: { type: String, required: true },
        fr: { type: String, required: true },
    },
    // Multi-language Description
    description: {
        en: { type: String, required: true },
        az: { type: String, required: true },
        fr: { type: String, required: true },
    },
    // New Fields
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