"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateUserRequest_1 = __importDefault(require("../../middlesWare/validateUserRequest"));
const cart_validation_1 = require("./cart.validation");
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
router.post('/', (0, validateUserRequest_1.default)(cart_validation_1.CartValidation.createCartZOdValidation), cart_controller_1.CartController.createCart);
router.get('/:category', cart_controller_1.CartController.getCart);
exports.cartRouter = router;
