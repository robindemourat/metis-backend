/**
 * Metis-backend
 * =======
 * Deliverables component controller
 */
import {lookup} from 'mime-types';
import {v4 as generateId} from 'uuid';
import formidable from 'formidable';
import {readFile, remove} from 'fs-extra';
import {resolve} from 'path';

import {
  getDeliverables as getDeliverablesDAL,
  getDeliverable as getDeliverableDAL,
  getDeliverableAttachment as getDeliverableAttachmentDAL,
  createDeliverable as createDeliverableDAL,
  updateDeliverable as updateDeliverableDAL,
  deleteDeliverable as deleteDeliverableDAL
} from './deliverables.dal';

/**
 * Get a list of deliverables
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 * @todo add filters handling through req queries
 */
export const getDeliverables = (req, res) =>
  res.json(getDeliverablesDAL({}));

/**
 * Get a single deliverable
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const getDeliverable = (req, res) =>
  res.json(
    getDeliverableDAL({
      id: req.params.id
    })
  );

/**
 * Get a single deliverable attachment
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const getDeliverableAttachment = (req, res) => {
  getDeliverableAttachmentDAL({
    id: req.params.id,
    filename: req.params.filename
  })
  .then(({data, mimetype}) => {
    res.writeHead(200, {'Content-Type': mimetype});
    res.end(data, 'binary');
  });
};

/**
 * Create a single deliverable
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const createDeliverable = (req, res) => {
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
        createDeliverableDAL({
          _id: generateId(),
          filename,
          type: 'deliverable'
        }, data)
      )
      .then(() => remove(attachmentPath))
      .then(() => res.json(getDeliverablesDAL({})))
      .catch(e => res.status(500).send(e));
  });
};
/**
 * Update a single deliverable
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const updateDeliverable = (req, res) => {
  const deliverableId = req.params.id;
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
        updateDeliverableDAL(deliverableId, {
          filename,
          mimetype
        }, data)
      )
      .then(() => remove(attachmentPath))
      .then(() =>
        res.json(
          getDeliverableDAL({
            id: deliverableId
          })
        )
      )
      .catch(e => res.status(500).send(e));
  });
};

/**
 * Delete a single deliverable
 * @param {object} req - the request of query
 * @param {object} res - the resource of query
 */
export const deleteDeliverable = (req, res) =>
  res.json(deleteDeliverableDAL({_id: req.params.id}));
