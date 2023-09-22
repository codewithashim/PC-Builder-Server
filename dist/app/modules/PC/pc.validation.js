"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCValidation = void 0;
const zod_1 = require("zod");
const KeyFeaturesSchema = zod_1.z.object({
    Brand: zod_1.z.string(),
    Model: zod_1.z.string(),
    Specification: zod_1.z.string(),
    Port: zod_1.z.string(),
    Voltage: zod_1.z.string(),
});
const createPCZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        image: zod_1.z.string({
            required_error: 'image is required',
        }),
        productName: zod_1.z.string({
            required_error: 'productName is required',
        }),
        category: zod_1.z.enum([
            'CPU',
            'Motherboard',
            'RAM',
            'Power Supply Unit',
            'Storage Device',
            'Monitor',
        ]),
        status: zod_1.z.enum(['In Stock', 'Out of Stock'], {
            required_error: 'status is required',
        }),
        price: zod_1.z.number({
            required_error: 'price is required',
        }),
        description: zod_1.z.string({
            required_error: 'description is required',
        }),
        keyFeatures: KeyFeaturesSchema,
        individualRating: zod_1.z.number({
            required_error: 'individualRating is required',
        }),
        averageRating: zod_1.z.number({
            required_error: 'averageRating is required',
        }),
        reviews: zod_1.z.array(zod_1.z.string({
            required_error: 'review is required',
        })),
    }),
});
exports.PCValidation = {
    createPCZodSchema,
};
