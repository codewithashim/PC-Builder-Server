import express from "express"
import validateRequest from "../../middlesWare/validateUserRequest"
import { CartValidation } from "./cart.validation"
import { CartController } from "./cart.controller"

const router = express.Router()


router.post('/',
validateRequest(CartValidation.createCartZOdValidation),
CartController.createCart)
router.get('/:category',CartController.getCart)

export const cartRouter = router