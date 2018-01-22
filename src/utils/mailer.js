/**
 * This module provides a function to send an email through smtp
 * thanks to the nodemailer lib.
 * @module metis-backend/utils/mailer
 */
import nodemailer from 'nodemailer';

/**
 * Sends an email
 * @param {object} data - the data of the email
 * @param {object} config - the config to use
 */
export default function sendEmail ({
  // from = '"Fred Foo 👻" <foo@blurdybloop.com>',
  to = [],
  subject = 'Hello ✔',
  html = '<b>Hello world?</b>'
}, {
  smtpEmail,
  smtpService,
  smtpPassword
}, logger) {
  return new Promise((resolve, reject) => {
    // create reusable transporter object using the default SMTP transport
    let transporter;
    if (smtpService === 'Gmail') {
      const smtp = `smtps://${encodeURIComponent(smtpEmail)}:${encodeURIComponent(smtpPassword)}@smtp.gmail.com:465`;
      transporter = nodemailer.createTransport(smtp);
    } else {
      transporter = nodemailer.createTransport('SMTP', {
        service: smtpService,
        auth: {
          user: smtpEmail,
          pass: smtpPassword
        }
      });
    }

    // setup email data
    let mailOptions = {
      from: smtpEmail, // sender address
      to: to.join(', '), // list of receivers
      subject, // Subject line
      html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
        return logger.error(error);
      }
      // logger.debug('Message sent: %s', info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      // return resolve(nodemailer.getTestMessageUrl(info));
      return resolve(info);
    });
  });
}


/**
 * Simulate email sending with ethereal
 */
// export function sendTestEmail ({
//   from = '"Fred Foo 👻" <foo@blurdybloop.com>',
//   to = [],
//   subject = 'Hello ✔',
//   html = '<b>Hello world?</b>'
// }, {
//   smtpHost = 'smtp.ethereal.email',
//   smtpPort = 587
//   // smtpEmail,
//   // smtpService,
//   // smtpPassword,
// }, logger) {
//   return new Promise((resolve, reject) => {
//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//     nodemailer.createTestAccount((err, account) => {
//       if (err) {
//         return reject(err);
//       }
//       // create reusable transporter object using the default SMTP transport
//       let transporter = nodemailer.createTransport({
//         host: smtpHost,
//         port: smtpPort,
//         secure: false, // true for 465, false for other ports
//         auth: {
//           user: account.user, // generated ethereal user
//           pass: account.pass // generated ethereal password
//         }
//       });

//       // setup email data with unicode symbols
//       let mailOptions = {
//         from, // sender address
//         to: to.join(', '), // list of receivers
//         subject, // Subject line
//         html // html body
//       };

//       // send mail with defined transport object
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           reject(error);
//           return logger.error(error);
//         }
//         logger.debug('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account

//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
//         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//         resolve(nodemailer.getTestMessageUrl(info));
//       });
//     });
//   });
// }
