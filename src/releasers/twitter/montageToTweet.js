

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
      include_abstract
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
  const media = include_abstract && abstractImageUri &&
          {
              type: 'image',
              description: 'abstract image',
              uri: abstractImageUri
          };
  return {
    status,
    media
  };
}
