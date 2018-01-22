import {dal as montageDal} from '../../components/montages';
import {fetchMontageDependencies} from '../../utils/data';

import pdf from '../pdf';
import epub from '../epub';

export const release = (diffusion) => {
  return new Promise ((resolve, reject) => {
    // get related montage
    montageDal.getMontage({id: diffusion.montage_id})
      .then(montage => {
        // fetch montage dependencies
        return fetchMontageDependencies(montage);
      })
      // register all release operations to perform
      .then(data => {
        const targets = diffusion.parameters.targets;

        const operations = targets.map(targetId => {
          switch(targetId) {

            case 'pdf':
              return pdf(data, diffusion);

            case 'epub-reflowable':
              return epub(data, diffusion, targetId);
            case 'epub-fixed':
              return epub(data, diffusion, targetId);


            default:
              return Promise.resolve();
          }
        });
        // execute
        return Promise.all(operations);
      })
      .then(resolve)
      .catch(reject);
  });
};
