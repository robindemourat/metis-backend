/**
 * This module provides an entrypoint to the web publication releaser
 * @module metis-backend/releasers/web
 */

import {post} from 'axios';

import {getConfig} from '../../utils/config';
import {hash} from '../../utils/crypto';
const {
  websiteBuilderUri,
  secret
} = getConfig();



export default function publish(data, diffusion) {
  return hash(secret)
          .then(pwd => {
            const endpoint = `${websiteBuilderUri}/update`;
            // send new data
            return post(endpoint, {data, diffusion, pwd});
          });
}
