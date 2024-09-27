const fs = require('fs');
const path = require('path');
const pug = require('pug');
const open = require('open');

const indexJsPath = path.join(__dirname, 'src/index.js');

const pugDir = path.join(__dirname, 'src');

const indexHtmlPath = path.join(__dirname, 'src/index.html');

const { App, routes } = require(indexJsPath);

const template = pug.compileFile(path.join(pugDir, 'index.pug'));

const app = new App(routes);
const html = template({ app });

fs.writeFileSync(indexHtmlPath, html);

open(indexHtmlPath);
