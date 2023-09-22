/* eslint-disable no-console */
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponce';
import { Category } from './category.model';

export const getALLCategory = catchAsync(
  async (req: Request, res: Response) => {
    const data = await Category.find({});

    sendResponse(res, {
      success: true,
      message: 'successfully get Category data',
      statusCode: 200,
      data: data,
    });
  }
);
