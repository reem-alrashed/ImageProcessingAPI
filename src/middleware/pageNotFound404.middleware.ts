import { Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const pageNotFound404 = (req: Request, res: Response) => {
  res.status(404);
  res.render('pageNotFound');
};