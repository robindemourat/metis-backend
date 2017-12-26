
import {dal as montageDal} from '../../components/montages';
import {fetchMontageDependencies} from '../../utils/data';



export const getAssetAttachmentUrl = (req, res) => {
  return res.send('');
};


export const getMontageData = (req, res) => {
  const id = req.params.id;
  montageDal.getMontage({id})
      .then(montage => {
        // fetch montage dependencies
        return fetchMontageDependencies(montage);
      })
      // register all release operations to perform
      .then(data => {
        return res.json(data);
      })
      .catch(e => res.status(500).send(e));
};
