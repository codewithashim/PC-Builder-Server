/* eslint-disable no-console */
import httpStatus from "http-status";
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

import GlobalHandler from "./app/middlesWare/globalErrorHandler";

import routes from "./app/routes";
import sendResponse from "./shared/sendResponce";

import cookieParser from "cookie-parser";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.get("/", async (req: Request, res: Response) => {
  sendResponse(res, {
    success: true,
    message: "Running the Pc Builder server",
    statusCode: 200,
    data: null,
  });
});

app.use(GlobalHandler);

// for unknown apiii hit error handle
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "NOt Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
