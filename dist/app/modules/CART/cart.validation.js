"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartValidation = void 0;
const zod_1 = require("zod");
const createCartZOdValidation = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.string({
            required_error: 'user is required(zod)',
        }),
        category: zod_1.z.string({
            required_error: 'category is required(zod)',
        }),
        productName: zod_1.z.string({
            required_error: 'productName is required(zod)',
        }),
    }),
});
exports.CartValidation = { createCartZOdValidation };
