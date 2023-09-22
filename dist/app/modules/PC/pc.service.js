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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const pc_model_1 = require("./pc.model");
const createPCServices = (PCData) => __awaiter(void 0, void 0, void 0, function* () {
    const createdPC = yield pc_model_1.PC.create(PCData);
    if (!createdPC) {
        throw new ApiError_1.default(400, "Failed to create new PC");
    }
    return createdPC;
});
const getSinglePC = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pc_model_1.PC.findById(id);
    return result;
});
const getByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pc_model_1.PC.find({ category: category });
    return result;
});
const deletePC = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pc_model_1.PC.findByIdAndDelete(id);
    return result;
});
exports.PCService = {
    createPCServices,
    getSinglePC,
    deletePC,
    getByCategory,
};
