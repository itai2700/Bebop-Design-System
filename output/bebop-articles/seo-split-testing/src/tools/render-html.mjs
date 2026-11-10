import fs from 'node:fs';
import { fontCss, renderHtml } from './lib.mjs';
const [htmlFile,outPng,w,h]=process.argv.slice(2);
const html=fs.readFileSync(htmlFile,'utf8').replace('/*FONTS*/',fontCss());
await renderHtml(html,outPng,+w,+h,1); console.log('wrote',outPng);
