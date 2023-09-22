"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const cart_model_1 = require("./cart.model");
const createCart = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield cart_model_1.Cart.create(payload);
    return cart;
});
const getSingleCart = (queryData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findOne(queryData);
    return result;
});
exports.CartService = {
    createCart,
    getSingleCart,
};
