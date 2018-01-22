/**
 * Metis-backend
 * =======
 * This is the application entrypoint.
 * It starts an express app listening at specified port.
 */

// import fs from 'fs';
// import https from 'https';
/* eslint no-console : 0 */
import app from './app';

/**
 * Connect config
 */
import {getConfig} from './utils/config';
const config = getConfig();
const {
  port
  // key, csr, cert
} = config;

/**
 * ===============
 * HTTPS Connection
 * ===============
 */

// /**
//  * Prepare https certificate
//  */
// const options = {
//   key,
//   ca: csr,
//   cert
// };

// /**
//  * Launch server
//  */
// https.createServer(options, app).listen(port, null, function () {
//   console.log('Server listening on port %d in %s mode', this.address().port, app.settings.env);
// });


/**
 * ===============
 * HTTP Connection
 * ===============
 */

app.listen(port, null, function () {
  console.log('Server listening on port %d in %s mode', this.address().port, app.settings.env);
});




