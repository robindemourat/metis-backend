/**
 * Plurishing-backend
 * =======
 * Assets component controller
 */
import {lookup} from 'mime-types';
import {v4 as generateId} from 'uuid';
import formidable from 'formidable';
import {readFile, remove} from 'fs-extra';
import {resolve} from 'path';

import {
  getAssets as getAssetsDAL,
  getAsset as getAssetDAL,
  getAssetAttachment as getAssetAttachmentDAL,
  createAsset as createAssetDAL,
  updateAsset as updateAssetDAL,
  deleteAsset as deleteAssetDAL
} from './assets.dal';

/**
 * Get a list of assets
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
export const getAssets = (req, res) =>
  res.json(getAssetsDAL({}));

/**
 * Get a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const getAsset = (req, res) =>
  res.json(
    getAssetDAL({
      id: req.params.id
    })
  );

/**
 * Get a single asset attachment
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const getAssetAttachment = (req, res) => {
  getAssetAttachmentDAL({
    ...req.query,
    id: req.params.id,
    filename: req.params.filename
  })
  .then(({data, mimetype}) => {
    res.writeHead(200, {'Content-Type': mimetype});
    res.end(data, 'binary');
  });
};

/**
 * Create a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const createAsset = (req, res) => {
  const filename = decodeURIComponent(req.params.id);
  const form = new formidable.IncomingForm({
    uploadDir : resolve(__dirname + '/../../../temp'),
    // multiples : true,
    keepExtensions : true
  });

  form.on('error', function(err){
    return res.status(500).send(err);
  });


  form.parse(req, function(err, fields, files) {
    const attachmentPath = files.file.path;
    readFile(attachmentPath)
      .then(data =>
        createAssetDAL({
          _id: generateId(),
          filename,
          type: 'asset'
        }, data)
      )
      .then(() => remove(attachmentPath))
      .then(() => res.json(getAssetsDAL({})))
      .catch(e => res.status(500).send(e));
  });
};
/**
 * Update a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const updateAsset = (req, res) => {
  const assetId = req.params.id;
  const form = new formidable.IncomingForm({
    uploadDir : resolve(__dirname + '/../../../temp'),
    // multiples : true,
    keepExtensions : true
  });

  form.on('error', function(err){
    return res.status(500).send(err);
  });


  form.parse(req, function(err, fields, files) {
    const attachmentPath = files.file.path;
    const filename= files.file.name;
    const mimetype = lookup(filename);
    readFile(attachmentPath)
      .then(data =>
        updateAssetDAL(assetId, {
          filename,
          mimetype
        }, data)
      )
      .then(() => remove(attachmentPath))
      .then(() =>
        res.json(
          getAssetDAL({
            id: assetId
          })
        )
      )
      .catch(e => res.status(500).send(e));
  });
};

/**
 * Delete a single asset
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const deleteAsset = (req, res) =>
  res.json(deleteAssetDAL({_id: req.params.id}));
