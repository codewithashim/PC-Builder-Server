/* eslint-disable no-console */
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { CartService } from './cart.service';
import sendResponse from '../../../shared/sendResponce';
import { ICart } from './cart.interface';
import { Cart } from './cart.model';

const createCart = catchAsync(async (req: Request, res: Response) => {
  const { ...CartData } = req.body;
  console.log(CartData);
  const result = await CartService.createCart(CartData);

  if (result) {
    sendResponse<ICart>(res, {
      statusCode: 200,
      success: true,
      message: 'Cart created successfully!',
      data: result,
    });
  }
});

const getCart = catchAsync(async (req: Request, res: Response) => {
  console.log(req.query);
  const queryData = { user: req.query?.user, category: req.params?.category };
  console.log(queryData);

  const result = await Cart.findOne(queryData).populate('productName');
  console.log(result);

  // sendResponse<ICart[]>(res, {
  //   statusCode: httpStatus.FOUND,
  //   success: true,
  //   message: 'Cart Data get successfully!',
  //   data: result,
  // });

  // const result = await CartService.getSingleCart(queryData);
  if (result) {
    sendResponse<ICart>(res, {
      statusCode: 200,
      success: true,
      message: 'Cart created successfully!',
      data: result,
    });
  }
});

export const CartController = { createCart, getCart };
