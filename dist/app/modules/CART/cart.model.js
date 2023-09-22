"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    user: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productName: {
        type: mongoose_1.Schema.Types.ObjectId, ref: "pc-builder",
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Cart = (0, mongoose_1.model)('cart', CartSchema);
