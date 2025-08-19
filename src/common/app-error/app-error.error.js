import jwt from 'jsonwebtoken';
import { responseError } from '../utilities/response.utility';
import { statusCodes } from '../utilities/status-code.utility';

export const appError = (err, req, res, next) => {
  console.log('middleware appError executed');

  // 401 - logout
  // 403 - api refresh-token
  if (err instanceof jwt.JsonWebTokenError)
    err = { ...err, code: statusCodes.UNAUTHORIZED };
  if (err instanceof jwt.TokenExpiredError)
    err = { ...err, code: statusCodes.FORBIDDEN };

  const resData = responseError(err, err?.message, err?.code);
  res.status(resData.statusCode).json(resData);
};
