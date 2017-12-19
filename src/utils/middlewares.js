/**
 * Plurishing-backend
 * =======
 * Custom middlewares for express
 */
import errorHandlerObj from './errorHandler';

export const errorHandler = (err, req, res, next) => {
  const handler = new errorHandlerObj(req.log);
  handler.handleError(err).then((isOperationalError) => {
      if (!isOperationalError) {
          next(err);
      } else {
        throw new Error(err);
      }
  });
};
