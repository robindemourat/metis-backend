/**
 * Some utils for managing errors in the right way
 * Taken from the repertory of good practices https://github.com/i0natan/nodebestpractices/
 */

/**
 * Catch unhandled promise rejections
 */
process.on('unhandledRejection', function (reason) {
  // I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
   // console.log(reason, reason.trace);
  throw reason;
});

/**
 * Catch unhandled exceptions to shut the process gracefully
 */
process.on('uncaughtException', function(error) {
   /*
    * @todo setup error types system
    */
   // errorManagement.handler.handleError(error);
   // if(!errorManagement.handler.isTrustedError(error))
   // console.log(error, error.trace);
   throw error;
});

/**
 * Custom error handling object
 * to be used in a middleware in order to catch all errors
 * and process them here (save them, send a mail to admin, ...)
 */
// const sendMailToAdminIfCritical = (logger, err) => logger.debug('send email to admin if critical');

// const saveInOpsQueueIfCritical = (logger, err) => logger.debug('saveInOpsQueueIfCritical');

const determineIfOperationalError = () => false;

export default function errorHandler(logger){
    this.handleError = function (error) {
        return new Promise(resolve => {
          logger.error(error);
          // sendMailToAdminIfCritical(logger, error)
          // saveInOpsQueueIfCritical(logger, error)
          resolve(determineIfOperationalError(error));
        });
    };
  }
