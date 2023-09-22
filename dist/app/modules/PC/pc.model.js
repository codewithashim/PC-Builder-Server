"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PC = void 0;
const mongoose_1 = require("mongoose");
const KeyFeaturesSchema = new mongoose_1.Schema({
    Brand: { type: String, required: true },
    Model: { type: String, required: true },
    Specification: { type: String, required: true },
    Port: { type: String, required: true },
    Voltage: { type: String, required: true },
});
const PCSchema = new mongoose_1.Schema({
    image: { type: String, required: true },
    productName: { type: String, required: true },
    category: { type: String, required: true },
    status: {
        type: String,
        enum: ["In Stock", "Out of Stock"],
        required: true,
    },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    keyFeatures: { type: KeyFeaturesSchema, required: true },
    individualRating: { type: Number, required: true },
    averageRating: { type: Number, required: true },
    reviews: { type: [String], required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.PC = (0, mongoose_1.model)("pc-builder", PCSchema);
