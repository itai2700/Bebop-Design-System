// Title-card hero, mirrors the Bebop. guide's hero.mjs "title" template (ink surface)
import fs from 'node:fs';
import { BB, fontCss, dataUri, renderHtml } from './lib.mjs';
const [specFile, outPng] = process.argv.slice(2);
const s = JSON.parse(fs.readFileSync(specFile,'utf8'));
const W=2400,H=1350,M=312, innerW=W-M*2, innerH=H-M*2;
const dark=(s.surface||'ink')==='ink'; const bg=dark?BB.ink:BB.paper, fg=dark?BB.paper:BB.ink, accent=dark?BB.magenta:BB.lime;
const words=String(s.hook).trim().split(/\s+/).length;
if(words>8) console.warn('WARNING: headline too long'); if(!/[.!?]$/.test(s.hook)) console.warn('WARNING: hook should end with a period');
const eyebrow=s.eyebrow?`<div class="eyebrow">${s.eyebrow}</div>`:'';
const author=s.author?`<div class="author">${s.author.image?`<img class="avatar" src="${dataUri(s.author.image)}">`:''}<span class="an">${s.author.name}</span>${s.author.role?`<span class="ar">${s.author.role}</span>`:''}</div>`:'';
const html=`<!doctype html><html dir="rtl"><head><meta charset="utf-8"><style>
${fontCss()}
html,body{margin:0;width:${W}px;height:${H}px;background:${bg};color:${fg};font-family:"Polin";overflow:hidden}
.txt{position:absolute;right:${M}px;top:${M-40-(s.shiftUp||0)}px;width:${innerW}px;height:${innerH+40}px;display:flex;flex-direction:column;justify-content:${s.author?'flex-start':'center'};padding-top:${s.author?40:0}px;gap:28px;box-sizing:border-box}
.hook{font-weight:900;font-size:${words>5?150:190}px;line-height:1.08;letter-spacing:-0.02em;color:${fg};max-width:${innerW}px}
.eyebrow{font-weight:600;font-size:56px;letter-spacing:0.08em;color:${accent};margin-bottom:8px}
.author{position:absolute;right:${M}px;bottom:${M}px;display:flex;align-items:center;gap:28px;font-size:52px;font-weight:600}
.author .avatar{width:120px;height:120px;border-radius:50%;object-fit:cover;filter:grayscale(1) sepia(0.18) brightness(1.08)}
.author .ar{color:${accent};font-weight:700}
</style></head><body>
<div class="txt">${eyebrow}<div class="hook">${String(s.hook).replace(/\n/g,"<br>")}</div></div>
${author}
</body></html>`;
await renderHtml(html,outPng,W,H,1); console.log('wrote',outPng);
