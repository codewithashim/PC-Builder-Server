"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCRouter = void 0;
const express_1 = __importDefault(require("express"));
const pc_controller_1 = require("./pc.controller");
const validateUserRequest_1 = __importDefault(require("../../middlesWare/validateUserRequest"));
const pc_validation_1 = require("./pc.validation");
const router = express_1.default.Router();
router.get('/', pc_controller_1.PCController.getALLPC);
router.post('/', (0, validateUserRequest_1.default)(pc_validation_1.PCValidation.createPCZodSchema), pc_controller_1.PCController.createPC);
router.get('/category', pc_controller_1.PCController.getByCategoryPC);
router.get('/:id', pc_controller_1.PCController.getSinglePC);
router.delete('/:id', pc_controller_1.PCController.deletePC);
exports.PCRouter = router;
