"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pc_route_1 = require("../modules/PC/pc.route");
const cart_rout_1 = require("../modules/CART/cart.rout");
const category_route_1 = require("../modules/CATEGORY/category.route");
const router = express_1.default.Router();
const modulesRoutes = [
    {
        path: '/pc',
        route: pc_route_1.PCRouter,
    },
    {
        path: '/pc-cart',
        route: cart_rout_1.cartRouter,
    },
    {
        path: '/category',
        route: category_route_1.CategoryRouter,
    },
];
modulesRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
