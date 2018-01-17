/* eslint security/detect-object-injection : 0 */
import {resolve as resolvePath} from 'path';
import {readFile, remove} from 'fs-extra';

import {v4 as genId} from 'uuid';

import {dal as assetDal} from '../../components/assets';
import {dal as montageDal} from '../../components/montages';
import {dal as compositionDal} from '../../components/compositions';

import  {service as html2img} from '../../services/html2img';

import {tweet, montageToTweet} from '../twitter';
import {mail, montageToMail} from '../mailing';

import {getConfig} from '../../utils/config';
const {
  twitter_consumer_key,
  twitter_consumer_secret,
  twitter_access_token,
  twitter_access_token_secret,

  smtpService,
  smtpEmail,
  smtpPassword,
  mailingHubEmail,

  serverUri
  // facebook_access_token
} = getConfig();

const twitterConfig = {
 consumer_key: twitter_consumer_key,
 consumer_secret: twitter_consumer_secret,
 access_token: twitter_access_token,
 access_token_secret: twitter_access_token_secret
};

const mailConfig = {
  smtp_service: smtpService,
  smtp_password: smtpPassword,
  smtp_email: smtpEmail,
  mailing_hub_email: mailingHubEmail
};

/**
 * @todo refactor as shared util
 */
const renderAbstractAsHtml = composition => {
  const abstr = composition && composition.metadata.abstract_original;
  if (abstr) {
    return `<html>
    <head>
      <style>
        *{background: white; color: black;}
      </style>
    </head>
    <body><p>${abstr}</p></body></html>`;
  }
  return '';
};

export const release = (diffusion) => {
  return new Promise ((resolve, reject) => {
    let montage;
    let composition;
    let assets = {};
    // fetch montage
    montageDal
      .getMontage({id: diffusion.montage_id})
      // fetch composition demendency
      .then(thatMontage => {
        montage = thatMontage;
        const compositionId = montage.data.target_composition_id;
        return compositionDal.getComposition({id: compositionId});
      })
    // fetch resource dependencies
    .then(thatComposition => {
      composition = thatComposition;
      const resources = montage.resources;
      if (resources) {
        // do stuff to fetch them
        /**
         * @todo implement resource fetching when adding resources images in micropublication
         */
      } else {
        return Promise.resolve();
      }
    })
    // fetch assets dependencies
    .then(() => {
      const operations = [];
      // produce abstract image ?
      if (montage.data.include_abstract && diffusion.parameters.targets.indexOf('twitter') > -1) {
        const html = renderAbstractAsHtml(composition);
        const absPath = __dirname + '/../../../temp/' + genId() + '.jpg';
        const path = resolvePath(absPath);
        operations.push(
          new Promise((reso, rej) => /* eslint promise/param-names : 0 */
            html2img(html, path, err => {
              if (err) {
                return rej(err);
              } else {
                readFile(path, 'base64')
                  .then(base64 => {
                    assets.abstractImageUri = base64;
                    return remove(path);
                  })
                  .then(reso);
              }
            })
          )
        );
      }
      if (montage.data.attached_assets && montage.data.attached_assets.length) {
        montage.data.attached_assets.forEach(citation => {
          const {image_asset_id: imageAssetId} = citation;
          operations.push(
            new Promise((reso, rej) => { /* eslint promise/param-names : 0 */
              let asset;
              assetDal.getAsset({
                id: imageAssetId
              })
              .then(ass => {
                asset = ass;
                return assetDal.getAssetAttachment({
                  id: ass._id,
                  filename: ass.filename,
                  encoding: 'base64'
                });
              })
              .then(resp => {
                assets[imageAssetId] = {
                  url: `${serverUri}/api/assets/${asset._id}/${asset.filename}`,
                  base64: resp.data
                };
                return Promise.resolve();
              })
              .then(reso)
              .catch(rej);
            })
          );
        });
      }
      return Promise.all(operations);
    })
    // register release operations to perform
    .then(() => {
      // execute
      const targets = diffusion.parameters.targets;

      const operations = targets.map(targetId => {
        let tweetContents;
        let mailContents;
        const urledAssets = Object.keys(assets).reduce((total, key) => ({
          ...total,
          [key]: assets[key].url
        }), {});
        switch(targetId) {
          case 'twitter':
            tweetContents = montageToTweet(montage, composition, assets);
            return tweet(tweetContents, twitterConfig);

          case 'mailing':
            mailContents = montageToMail(montage, composition, urledAssets, mailConfig);
            return mail(mailContents, mailConfig);
          case 'facebook':
          default:
            return Promise.resolve();
        }
      });
      return Promise.all(operations);
    })
    .then(resolve)
    .catch(reject);
  });
};
