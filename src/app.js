/**
 * Plurishing-backend
 * =======
 * Application entrypoint
 */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {resolve} from 'path';
/**
 * Dependencies : middlewares
 */
import bunyanLogger from 'express-bunyan-logger';
import debugStream from 'bunyan-debug-stream';
import {
  //authenticateWithTokens,
  errorHandler
} from './utils/middlewares';
/**
 * Dependencies : Components API
 */
import {api as assets} from './components/assets';
import {api as users} from './components/users';
import {api as auth} from './components/auth';

/**
 * Connect config
 */
import {
  getConfig
} from './utils/config';
const config = getConfig();
const {secret} = config;

/**
 * Init express app
 */
const app = express();

/**
 * Enhance the app with middlewares
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // use json body parser except when uploading raw files
app.use(cors());
app.use(require('express-promise')());
app.use(bunyanLogger({
  name: "log",
  streams: [{
      level:  'info',
      type:   'raw',
      stream: debugStream({
          basepath: __dirname, // this should be the root folder of your project.
          forceColor: true
      })
  }],
  serializers: debugStream.serializers
}));

/**
 * set secret variable for auth processes
 */
app.set('superSecret', secret);

/**
 * Set a route
 */
app.get('/', (req, res) => {
  res.send('This is an api. Connect to /api/:whatyouwant to get something.');
});

export default app;

/**
 * Static asset files
 */
const assetsPath = resolve(`${__dirname}/../assets`);
app.use('/assets', express.static(assetsPath));


/**
 * Create API router
 */
const apiRoutes = express.Router();

/**
 * No-token authentication-related routes
 */
apiRoutes.use('/', auth);

/**
 * API documentation route
 */

// /**
//  * Apply authentication middleware for protected routes using jwt
//  * (after that line all routes are protected)
//  */
// // apiRoutes.use(authenticateWithTokens);
// /**
//  * Protected api routes
//  */
// // apiRoutes.use('/articles', articles);
apiRoutes.use('/users', users);
apiRoutes.use('/assets', assets);

// /**
//  * Connect the api router to the app
//  */
app.use('/api', apiRoutes);

// /**
//  * Connect error handler
//  */
app.use(errorHandler);

