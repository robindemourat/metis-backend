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

        return sendEmail({
          from,
          to, // array
          subject,
          html
        }, {
          smtpEmail: smtp_email,
          smtpService: smtp_service,
          smtpPassword: smtp_password
        }, console.log);/* eslint no-console : 0 */
    });
}
