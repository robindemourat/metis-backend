/**
 * Metis-backend
 * =======
 * Custom middlewares for express
 */
import jwt from 'jsonwebtoken'; // used to create, sign, and verify tokens

import {getConfig} from './config';
import errorHandlerObj from './errorHandler';

const {secret} = getConfig();


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

const retrieveToken = req =>
  (req.body && req.body.token) ||
  (req.params && req.params.token) ||
  (req.headers && req.headers['x-access-token']);

export const authenticateWithTokens = (req, res, next) => {
  const token = retrieveToken(req);
  try{
    // verify that the token data corresponds to the user willing to change the password
    jwt.verify(token, secret, function (err) {
      if (err) {
        res.status(401).send('Protected route');
      } else {
        next();
      }
    });
  } catch(err) {
    res.status(401).send('Protected route');
  }
};
