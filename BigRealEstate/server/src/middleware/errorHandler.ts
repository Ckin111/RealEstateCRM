import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../controllers';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.json({
    error: err.message,
  });
};

export default errorHandler;
