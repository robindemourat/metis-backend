/* eslint no-unused-vars : 0 */
import React from 'react';
import MailContent from 'plurishing-shared/dist/components/views/micro/MicropublicationMail';
import Oy from 'oy-vey';


export default function montageToMail(montage, composition, asset, {smtp_email, mailing_hub_email}) {
  const Template = () => (<MailContent montage={montage} composition={composition} />);
  const title = '[Plurishing] ' + montage.metadata.title.length ? montage.metadata.title : composition.metadata.title;
  return {
    from: `"Plurishing 👻" <${smtp_email}>`,
    to: [mailing_hub_email],
    subject: title,
    html: Oy.renderTemplate(<Template />, {
      title,
      // headCSS: '@media ...',
      previewText: composition.metadata.abstract_original
    })
  };
}
