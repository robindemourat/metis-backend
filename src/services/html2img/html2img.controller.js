import html2img from './html2img.service.js';
import {v4 as genId} from 'uuid';
import {readFile, remove} from 'fs-extra';
import {resolve} from 'path';

const temp = resolve(__dirname + '/../../../temp/');

export default function controller (req, res) {
  const html = req.body.data;
  const id = genId();
  const filename = temp + '/' + id + '.jpg';
  // convert to image
  html2img(html, filename, err => {
    if (err) {
      return res.status(500).send(err);
    }
    // read file as base64
    readFile(filename, 'base64')
      // send file
      .then(base64 => res.send(base64))
      // remove temp file
      .then(() => remove(filename));
  });
}
