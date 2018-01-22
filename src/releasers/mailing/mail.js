/**
 * This module provides a function that sends a mail formatted from a micropublication montage.
 * @module metis-backend/releasers/mailing
 */

/**
 * @todo reformat mailing releaser to simplify it and directly use the sendEmail util in controller
 */
import sendEmail from '../../utils/mailer';

import Ajv from 'ajv';

import mailContentsSchema from './mailing.contents.schema';
import paramsSchema from './mailing.parameters.schema';

const ajv = new Ajv();

/**
 * @param {object} contents - the contents to send
 * @param {object} params - connection params (credentials, ...)
 * @return {Promise} promise
 */
export default function mail(contents, params) {
    return new Promise((resolve, reject) => {
        // validate contents object
        const contentsValidation = ajv.validate(mailContentsSchema, contents);
        if (!contentsValidation) {
          return reject(ajv.errors);
        }

        // validate params object
        const paramsValidation = ajv.validate(paramsSchema, params);
        if (!paramsValidation) {
          return reject(ajv.errors);
        }
        const {
          from,
          to,
          subject,
          html
        } = contents;

        const {
          smtp_email,
          smtp_service,
          smtp_password
        } = params;

        sendEmail({
          from,
          to, // array
          subject,
          html
        }, {
          smtpEmail: smtp_email,
          smtpService: smtp_service,
          smtpPassword: smtp_password
        }, console)/* eslint no-console : 0 */
        .then(resolve)
        .catch(reject);
    });
}
