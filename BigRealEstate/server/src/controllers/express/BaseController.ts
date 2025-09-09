import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Log } from '../../utils';
import DBServices from '../../db/DBServices';
import { Developers } from '../../interfaces';

const BaseController = (
  cb: (req: Request, res: Response, next: NextFunction) => Promise<any> | any,
): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    return await cb(req, res, next);
  };
};

export const TestController = BaseController(async (req, res, next) => {
  try {
    Log.blue(`Test controller`, false);
    Log.log(Log.json(req.body));

    throw new Error(`Should hit error handler middleware`);

    await DBServices.FourUpDB.createFourUp({
      fourUpId: 'Test',
      progress: [
        {
          signedBy: Developers.Robert,
          value: 'Test',
        },
        {
          signedBy: Developers.Andrew,
          value: 'Test',
        },
      ],
      planned: [
        {
          signedBy: Developers.Robert,
          value: 'Test',
        },
        {
          signedBy: Developers.Andrew,
          value: 'Test',
        },
      ],
      risks: ['Test', 'Test'],
      needs: ['Test', 'Test'],
    });

    await DBServices.HoursDB.createHour({
      hourId: 'Test',
      developer: Developers.Robert,
      date: new Date().getTime(),
      hours: 3,
    });

    return res.json({
      message: `Success`,
    });
  } catch (err) {
    next(err);
  }
});

export default BaseController;
