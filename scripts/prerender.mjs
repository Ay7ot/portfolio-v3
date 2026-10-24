#!/usr/bin/env node
// Bake the server-rendered page into dist/index.html and inline its stylesheet.
// Runs after `vite build` and `vite build --ssr`, so the first paint needs only
// the HTML document instead of waiting for the JS bundle and a CSS request.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SSR = join(ROOT, 'dist-ssr');

const { render } = await import(pathToFileURL(join(SSR, 'entry-server.js')).href);
let html = await readFile(join(DIST, 'index.html'), 'utf8');

const appHtml = render();
if (!html.includes('<div id="root"></div>')) throw new Error('root element not found in dist/index.html');
html = html.replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>`);

const cssLink = /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/;
const match = html.match(cssLink);
if (!match) throw new Error('stylesheet link not found in dist/index.html');
const css = await readFile(join(DIST, match[1]), 'utf8');
html = html.replace(match[0], () => `<style>${css}</style>`);

await writeFile(join(DIST, 'index.html'), html);
await rm(SSR, { recursive: true, force: true });
console.log(`prerendered dist/index.html (${(html.length / 1024).toFixed(1)} kB)`);
