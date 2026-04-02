import { NextFunction, Request, Response } from "express";

const loggerMiddleware = (
  request: Request,
  Response: Response,
  next: NextFunction,
) => {
  const currentDate = new Date().toLocaleString();
  console.log(`(${currentDate})`, request.method.toUpperCase(), request.url);

  next();
};

export { loggerMiddleware };
