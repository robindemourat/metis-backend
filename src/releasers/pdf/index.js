import {resolve as resolvePath} from 'path';
import {readFile} from 'fs-extra';
/**
 * @todo use proper component to render pdf view
 */
import Component from 'plurishing-shared/dist/components/previews/StaticMontagePreview/PreviewContainer';

import generatePdf from './pdf.generator';
import {dal as deliverableDal} from '../../components/deliverables';


const tempDirPath = resolvePath(__dirname + '/../../../temp');


export default function publish(data, diffusion) {
  return new Promise((resolve, reject) => {

    let deliverable;

    generatePdf({
      Component,
      props: data,
      tempDirPath,
      outputDirPath: tempDirPath
    }, pdfPath => {
      deliverable = {
        type: 'deliverable',
        date_produce: new Date().getTime(),
        diffusion_id: diffusion.id,
        montage_id: data.montage._id,
        montage_type: data.montage.metadata.montage_type,
        montage_title: data.montage.metadata.title,
        version: diffusion.version,
        filename: pdfPath.split('/').pop(),
        mimetype: 'application/pdf'
      };
      return readFile(pdfPath)
        .then(deliverableData => {
          return deliverableDal.createDeliverable(deliverable, deliverableData);
        });
    })
    .then(resolve)
    .catch(reject);
  });
}
