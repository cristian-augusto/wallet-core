import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";
import { HttpStatus } from "./HttpStatus";

const errorHandler = (
  error: any,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  if (error instanceof AppError) {
    response.status(error.status).json({
      error: true,
      message: error.message,
    });

    return;
  }

  console.error(error);

  response.status(HttpStatus.BAD_GATEWAY).json({
    error: true,
    message: "Ops, an error has occurred, please try again later!",
  });
};

export default errorHandler;
