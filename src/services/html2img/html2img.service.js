/**
 * This module provides main service function
 * for the html2img service.
 * @module metis-backend/services/html2img
 */

import webshot from 'webshot';

export default function (html, path, callback) {
  webshot(html, path, {
    siteType:'html',
    windowSize: {
      width: 900,
      // height: 450
      height: 50 // setting a mini height to have well formed images
    },
    shotSize: {
      width: 'all',
      height: 'all'
    }
  },
  (err) => {
    callback(err);
  });
}
