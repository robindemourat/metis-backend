/* eslint no-unused-vars : 0 */
import React from 'react';
import MailContent from 'plurishing-shared/dist/components/views/micro/MicropublicationMail';
import Oy from 'oy-vey';


export default function montageToMail(montage, composition, assets, {smtp_email, mailing_hub_email}) {
  const Template = () => (<MailContent montage={montage} composition={composition} assets={assets} />);
  let title = '[Plurishing] ' + montage.metadata.title.length ? montage.metadata.title : composition.metadata.title;
  title = title.length ? title : '[Plurishing]';
  const previewText = composition.metadata.abstract_original || title || 'Plurishing';
  return {
    from: `"Plurishing 👻" <${smtp_email}>`,
    to: [mailing_hub_email],
    subject: title,
    html: Oy.renderTemplate(<Template />, {
      title,
      // headCSS: '@media ...',
      previewText
    })
  };
}
