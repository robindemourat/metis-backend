

const TEXT_LIMIT = 280;

const makeText = (title, link, creators) => {
  const creatorsStr = creators.reduce((str, creator, index) =>
    str
    + (creator.given ? creator.given : '')
    + (creator.given && creator.family ? ' ' : '')
    + (creator.family ? creator.family : '')
    + (index === creators.length - 1 ? '' : ' & ')
    , '');

  const vals = [title, link, creatorsStr];
  let txt = '';
  vals.forEach(val => {
    if (val && (txt + ' ' + val).length <= TEXT_LIMIT) {
      txt += ' ' + val;
    }
  });
  return txt;
};



export default function montageToTweet (montage, composition, assets) {
  const {
    data: {
      link,
      include_abstract,
      attached_assets
    }
  } = montage;
  const {
    metadata: {
      title,
      creators
    }
  } = composition;

  const {
    abstractImageUri
  } = assets;
  const status = makeText(title, link, creators);
  const media = (include_abstract && abstractImageUri) ?
          [{
              type: 'image',
              description: 'abstract image',
              uri: abstractImageUri
          }] : [];
  if (attached_assets) {
    // limit to first 4 medias (limit of twitter)
    const limit = media.length ? 4 - media.length : 4;
    /**
     * @todo it should be explicited somewhere/at some point in ui that twitter accepts max 4 images
     */
    attached_assets.slice(0, limit).forEach(citation => {
      const {image_asset_id} = citation;
      /**
       * @todo investigate possible security issue
       * @body security linter throws a warning for the following line
       */
      const uri = assets[image_asset_id].base64;/* eslint security/detect-object-injection : 0 */
      media.push({
        type: 'image',
        description: 'attached image',
        uri
      });
    });
  }
  return {
    status,
    media
  };
}
