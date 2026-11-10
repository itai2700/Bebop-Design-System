import fs from 'node:fs';
import path from 'node:path';
export const BB = { ink:'#0A0E10', paper:'#F2F0E8', stone:'#2A2E30', magenta:'#FF3D8B', lime:'#E0FF4F' };
const fontsDir = new URL('../../../../../fonts', import.meta.url).pathname;
function face(file, w){ const p=path.join(fontsDir,file); const b=fs.readFileSync(p).toString('base64');
  return `@font-face{font-family:"Polin";src:url(data:font/woff2;base64,${b}) format("woff2");font-weight:${w};font-style:normal;}`; }
export const fontCss = () => [face('Polin-Regular.woff2',400),face('Polin-Semibold.woff2',600),face('Polin-Bold.woff2',700),face('Polin-Black.woff2',900)].join('\n');
export function dataUri(file){ const e=path.extname(file).slice(1).toLowerCase(); const m=e==='jpg'||e==='jpeg'?'image/jpeg':e==='webp'?'image/webp':'image/png';
  return `data:${m};base64,${fs.readFileSync(file).toString('base64')}`; }
export function imageSize(file){ const b=fs.readFileSync(file);
  if(b.readUInt32BE(0)===0x89504e47) return [b.readUInt32BE(16),b.readUInt32BE(20)];
  let i=2; while(i<b.length){ if(b[i]!==0xff){i++;continue;} const m=b[i+1]; if(m>=0xc0&&m<=0xc3) return [b.readUInt16BE(i+7),b.readUInt16BE(i+5)]; i+=2+b.readUInt16BE(i+2);} throw new Error('unsupported'); }
export async function renderHtml(html, outPng, w, h, dsf=1){
  const { chromium } = await import('playwright');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport:{width:w,height:h}, deviceScaleFactor:dsf });
  await page.setContent(html, { waitUntil:'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: outPng, type:'png' });
  await browser.close(); return outPng; }
