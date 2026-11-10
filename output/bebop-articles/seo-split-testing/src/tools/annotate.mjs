// Numbered screenshot on a Paper mat, mirrors the Bebop. guide's annotate.mjs
import fs from 'node:fs';
import { BB, fontCss, dataUri, renderHtml, imageSize } from './lib.mjs';
const [specFile, outPng] = process.argv.slice(2);
const spec=JSON.parse(fs.readFileSync(specFile,'utf8')); const PAD=spec.pad??48;
const [SW,SH]=imageSize(spec.image); const [cx,cy,cw,ch]=spec.crop||[0,0,SW,SH];
let CW=1520, CH=Math.min(1900, Math.round((CW-PAD*2)*ch/cw)+PAD*2); if(Array.isArray(spec.canvas)) [CW,CH]=spec.canvas;
const innerW=CW-PAD*2, innerH=CH-PAD*2, scale=Math.min(innerW/cw,innerH/ch);
const dw=Math.round(cw*scale), dh=Math.round(ch*scale), ox=Math.round((CW-dw)/2), oy=Math.round((CH-dh)/2);
const X=x=>ox+(x-cx)*scale, Y=y=>oy+(y-cy)*scale, Sx=v=>v*scale;
const uiText=Math.round((spec.uiPx||28)*scale); console.log(`UI text on canvas ~${uiText}px`); if(uiText<26) console.warn('WARNING: crop too wide for mobile');
let svg='';
for(const c of spec.callouts||[]){
  if(c.type==='box') svg+=`<rect x="${X(c.x)}" y="${Y(c.y)}" width="${Sx(c.w)}" height="${Sx(c.h)}" rx="8" fill="none" stroke="${BB.lime}" stroke-width="8"/>`;
  if(c.type==='number') svg+=`<circle cx="${X(c.x)}" cy="${Y(c.y)}" r="36" fill="${BB.magenta}"/><text x="${X(c.x)}" y="${Y(c.y)}" dy="0.36em" text-anchor="middle" font-family="Polin" font-weight="900" font-size="38" fill="${BB.paper}">${c.n}</text>`;
}
const html=`<!doctype html><html><head><meta charset="utf-8"><style>
${fontCss()}
html,body{margin:0;width:${CW}px;height:${CH}px;background:${BB.paper};overflow:hidden}
.shot{position:absolute;left:${ox}px;top:${oy}px;width:${dw}px;height:${dh}px;border-radius:12px;overflow:hidden;box-shadow:0 4px 14px rgba(10,14,16,0.07),0 1px 2px rgba(10,14,16,0.05);background:#fff}
.shot img{position:absolute;left:${-cx*scale}px;top:${-cy*scale}px;width:${SW*scale}px;height:${SH*scale}px}
svg{position:absolute;inset:0}
</style></head><body><div class="shot"><img src="${dataUri(spec.image)}"></div><svg width="${CW}" height="${CH}">${svg}</svg></body></html>`;
await renderHtml(html,outPng,CW,CH,1); console.log('wrote',outPng,`${CW}x${CH}`);
