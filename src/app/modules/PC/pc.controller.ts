import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { PCService } from './pc.service';
import sendResponse from '../../../shared/sendResponce';
import { PC } from './pc.model';
import { IPC } from './pc.interface';

const createPC = catchAsync(async (req: Request, res: Response) => {
  const { ...PC } = req.body;
  // console.log(PC, 'from controller=================');

  const result = await PCService.createPCServices(PC);
  if (result) {
    sendResponse(res, {
      success: true,
      message: 'successfully create PC',
      statusCode: 200,
      data: result,
    });
    // next()
  }
});

const getALLPC = catchAsync(async (req: Request, res: Response) => {
  const data = await PC.find({});
  sendResponse(res, {
    success: true,
    message: 'successfully get PCs',
    statusCode: 200,
    data: data,
  });
});

const getSinglePC = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await PCService.getSinglePC(id);
  // console.log(id,"id");

  sendResponse<IPC>(res, {
    statusCode: 200,
    success: true,
    message: 'PC recieved successfully !',
    data: result,
  });
});

const getByCategoryPC = catchAsync(async (req: Request, res: Response) => {
  const category = req.query.category

  const result = await PCService.getByCategory(category as string);
  // console.log(id,"id");
  sendResponse<IPC[]>(res, {
    statusCode: 200,
    success: true,
    message: 'PC category successfully !',
    data: result,
  });
});

const deletePC = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await PCService.deletePC(id);

  sendResponse<IPC>(res, {
    statusCode: 200,
    success: true,
    message: 'PC deleted successfully !',
    data: result,
  });
});

export const PCController = {
  createPC,
  getALLPC,
  getSinglePC,
  deletePC,
  getByCategoryPC
};
