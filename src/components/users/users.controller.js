// /**
//  * Metis-backend
//  * =======
//  * Users component controller
//  */
import jwt from 'jsonwebtoken'; // used to create, sign, and verify tokens

import {hash} from '../../utils/crypto';
import sendEmail from '../../utils/mailer';
import {welcomeEmail} from '../../utils/emails';

import {
  getUsers as getUsersDAL,
  getUser as getUserDAL,
  createUser as createUserDAL,
  updateUser as updateUserDAL,
  deleteUser as deleteUserDAL
} from './users.dal';

import {getConfig} from '../../utils/config';
const config = getConfig();

const {
  // smtpPort,
  // smtpHost,
  smtpEmail,
  smtpService,
  smtpPassword,
  secret,
  backofficeBaseUri
} = config;
const mailConfig = {
  // smtpPort,
  // smtpHost,
  smtpEmail,
  smtpService,
  smtpPassword
};

const retrieveToken = req => req.body.token || req.params.token || req.headers['x-access-token'];

/**
 * Verifies req is performed by an admin user by inspecting auth token
 * @param {object} req - the request of query
 * @return {Promise} res - resolves if token bearer is an admin
 */
const ensureAdmin = (req) =>
  new Promise((resolve, reject) => {
    const token = retrieveToken(req);
    // verify that the token data corresponds to the user willing to change the password
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        reject(err);
      } else if (decoded.admin) {
        resolve();
      } else {
        reject();
      }
    });
  });

/**
 * Verifies req is performed by an admin user or by the user corresponding to id param by inspecting auth token
 * @param {object} req - the request of query
 * @return {Promise} res - resolves if token bearer is an admin or the own user
 */
const ensureAdminOrOwn = (req) =>
  new Promise((resolve, reject) => {
    const token = retrieveToken(req);
    // verify that the token data corresponds to the user willing to change the password
    jwt.verify(token, secret, function (err, decoded) {
      const admin = decoded.admin;
      const own = decoded.userid === req.params.id;
      if (err) {
        reject(err);
      } else if (admin || own) {
        resolve();
      } else {
        reject();
      }
    });
  });

/**
 * Get a list of users
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
export const getUsers = (req, res) =>
  ensureAdmin(req)
    .then(() =>
        res.json(getUsersDAL({}))
    )
    .catch(error => res.status(403).json({message: 'admin only', error}));

/**
 * Get a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const getUser = (req, res) =>
  ensureAdminOrOwn(req)
    .catch(error => res.status(403).json({message: 'admin only', error}))
    .then(() =>
      res.json(
        getUserDAL({
          id: req.params.id
        })
      )
    );

/**
 * Create a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const createUser = (req, res) =>
  ensureAdmin(req)
    .catch(error => res.status(403).json({message: 'admin only', error}))
    // ensure user does not already exists
    .then(() =>
      getUsersDAL({query: {email: req.body.email}})
    )
    .then(users => {
      if (users.length) {
        return res.status(403).json({message: 'email already exists'});
      } else {
        // create user
        return createUserDAL({
          ...req.body,
          type: 'user'
        });
      }
    })
    .then(({id}) => getUserDAL({id}))
    .then(user => {
      // create a token
      var payload = {
        admin: user.admin,
        userid: user._id
      };
      var token = jwt.sign(payload, secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      user.resetPasswordToken = token;
      return updateUserDAL(user._id, user);
    })
    .then(({id}) => getUserDAL({id}))
    .then(user => {
      const appUrl = backofficeBaseUri;
      const {subject, html} = welcomeEmail(appUrl, user);
      return sendEmail({
        subject,
        html,
        to: [user.email]
      }, mailConfig, req.log);
    })
    .then(() => {
      res.json(getUsersDAL({}));
    });

/**
 * Update a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const updateUser = (req, res) =>
  ensureAdminOrOwn(req)
    .catch(error => res.status(403).json({message: 'admin only', error}))
    .then(() =>
      res.json(
        updateUserDAL(
          req.params.id,
          req.body, // for now we perform a full replace (vs merge with $set)
        )
      )
    );

/**
 * Delete a single user
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const deleteUser = (req, res) =>
  ensureAdmin(req)
    .catch(error => res.status(403).json({message: 'admin only', error}))
    .then(() =>
      res.json(deleteUserDAL({_id: req.params.id}))
    );

/**
 * Handles password reset (only own user can do that, not even admin)
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const changeUserPassword = (req, res) => {
  const {_id, password} = req.body;
  const token = retrieveToken(req);
  // verify that the token data corresponds to the user willing to change the password
  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      res.status(422).json({message: 'Invalid token', error: err});
    } else if (decoded.userid === _id) {
      hash(password)
        .then(hash =>
          updateUserDAL(
            // get
            _id,
            // set
            {
              ...req.body,
              password: hash,
              resetPasswordToken: undefined
            }
          ))
          .then(() =>
            getUserDAL({query: {id: _id}})
          )
          .then(user => {
            if (user) {
              res.json(user);
            } else {
              res.status(404).json({message: 'user not found'});
            }
          })
        .catch(error => res.status(500).json({message: 'error with database.', error}));
    } else {
      res.status(403).json({message: 'not allowed to modify password of another user'});
    }
  });
};
