/**
 * Plurishing-backend
 * =======
 * Authentification routes handler
 */

import jwt from 'jsonwebtoken'; // used to create, sign, and verify tokens
import {comparePwd} from '../../utils/crypto';
import sendEmail from '../../utils/mailer';
import {resetPwdEmail} from '../../utils/emails';

/**
 * @todo avoid this horizontal dependency
 */
import {dal as usersDAL} from '../users';

import {
  getConfig
} from '../../utils/config';
const config = getConfig();

const {
  // smtpPort,
  // smtpHost,
  smtpEmail,
  smtpService,
  smtpPassword,
  backofficeBaseUri
} = config;
const mailConfig = {
  // smtpPort,
  // smtpHost,
  smtpEmail,
  smtpService,
  smtpPassword
};

/**
 * Builds a jwt token with user data in payload
 * @param {object} user - the user data to build the token with
 * @param {string} secret - the app secret to use to encode the token
 * @param {number} expiresIn - expiration delay of the token
 * @return {string} token
 * note : 86400 == expires in 24 hours
 */
const buildToken = (user, secret, expiresIn = 86400) => {
  const payload = {
    admin: user.admin,
    userid: user._id
  };
  const token = jwt.sign(payload, secret, {
    expiresIn
  });
  return token;
};
/**
 * Handle login attempt from a user
 * @todo write everything in promise style
 * @todo normalize behaviors for error res
 * @param {object} req - the request
 * @param {object} res - the resource
 */
export const login = (req, res) => {
  // find the user
  usersDAL.getUser({
    email: req.body.email
  })
  // then check his credentials
  .then(user => {
    if (!user) {
      return res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      const pwd = req.body.password;
      const hash = user.password;
      comparePwd(pwd, hash)
        .then(correct => {
          if (correct) {
              // if user is found and password is right
              // create a token
            const token = buildToken(user, req.app.get('superSecret'));
            res.json({
              success: true,
              message: 'Enjoy your token!',
              user: Object.assign({}, user, {password: undefined}),
              token: token
            });
          } else {
            res.status(422).json({ success: false, message: 'Authentication failed. Wrong password.' });
          }
        })
        .catch(e => {
          res.status(422).json({ success: false, message: 'Authentication failed. Error with password.', error: e });
        });
    }
  })
  .catch(error => {
    res.status(404).json({ success: false, message: 'No match.', error });
  });
};

/**
 * Handle signup request from a user
 * Note: for this cms users creation is protected (admins only)
 * so signup is just the process of activating an account and setting a first password
 * @param {object} req - the request
 * @param {object} res - the resource
 */
export const signup = (req, res) => {
  // find the user
  usersDAL.getUser({
    id: req.body.id
  })
  .then(user => {
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      const token = req.body.token || req.param('token') || req.headers['x-access-token'];
      // decode token
      if (token) {
        // verifies secret and checks exp
        jwt.verify(token, req.app.get('superSecret'), (err) => {
          if (err) {
            return res.json({ success: false, message: 'Failed to authenticate signup token.' });
          } else {

            // create a new login token
            const newToken = buildToken(user, req.app.get('superSecret'));
            // delete temporary token
            // user.resetPasswordToken = undefined;

            usersDAL.updateUser(user._id, user)
              .then(() => {
                res.json({
                  success: true,
                  message: 'Enjoy your token!',
                  user, // : Object.assign({}, user, {password: undefined, resetPasswordToken: undefined}),
                  token: newToken
                });
              })
              .catch(e => {
                res.status(500).send({
                  success: false,
                  message: 'Error while updating user with new data',
                  error: e
                });
              });
          }
        });
      } else {
        // if there is no token
        // return an error
        return res.status(403).send({
          success: false,
          message: 'No signup token provided.'
        });
      }
    }
  });
};

/**
 * Handle password reset request from a user
 * @todo write everything in promise style
 * @param {object} req - the request
 * @param {object} res - the resource
 */
export const resetPassword = (req, res) => {
  const body = req.body;
  const email = body.email;
  if (email) {
    usersDAL.getUser({
      email: email
    })
    .then(user => {
      if (user) {
        // create a token
        const token = buildToken(user, req.app.get('superSecret'));
        user.resetPasswordToken = token;

        usersDAL.updateUser(user._id, user)
        .then(() => {
          const appUrl = backofficeBaseUri;
          const {html, subject} = resetPwdEmail(appUrl, user);

          return sendEmail({
            subject,
            html,
            to: [email]
          }, mailConfig, req.log);
        })
        .then(() => {
          res.json({message: 'request sent'});
        })
        .catch(e => res.status(500).send({error: e, message: 'mail failed'}));
      } else {
        res.status(404).json({message: 'user not found'});
      }
    })
    .catch(error => res.status(500).json({message: 'error in db', error}));
  } else {
    res.status(422).json({message: 'no email in request'});
  }
};
