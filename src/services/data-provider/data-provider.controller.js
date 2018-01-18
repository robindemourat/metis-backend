
import {dal as montageDal} from '../../components/montages';
import {dal as assetDal} from '../../components/assets';
import {fetchMontageDependencies} from '../../utils/data';



export const getAssetAttachmentUrl = (req, res) => {
  const id = req.params.id;
  return assetDal.getAsset({id})
          .then(asset => {
            return assetDal.getAssetAttachment({
              id,
              filename: asset.filename
            })
          })
          .then(({data, mimetype}) => {
            res.writeHead(200, {'Content-Type': mimetype});
            res.end(data, 'binary');
          })
          .catch(e => res.status(500).send(e));
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
