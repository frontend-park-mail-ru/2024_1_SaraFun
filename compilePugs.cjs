const pug = require('pug');
const path = require('path');
const fs = require('fs-extra');

const srcDir = path.join(__dirname, './src'); 
const outDir = path.join(__dirname, './src/templates'); 

async function findPugFiles(dir) {
  let results = [];
  const list = await fs.readdir(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(await findPugFiles(filePath));
    } else if (file.endsWith('.pug')) {
      results.push(filePath);
    }
  }
  return results;
}

async function compilePugToJs(srcDir, outDir) {
  const pugFiles = await findPugFiles(srcDir);

  for (const pugFile of pugFiles) {
    const compiledFunction = pug.compileFileClient(pugFile, { name: 'template' });
    const relativePath = path.relative(srcDir, pugFile);
    const outPath = path.join(outDir, relativePath).replace('.pug', '.js');
    
    await fs.ensureDir(path.dirname(outPath));
    await fs.writeFile(outPath, compiledFunction, 'utf8');
    console.log(`Compiled: ${pugFile} -> ${outPath}`);
  }
}

compilePugToJs(srcDir, outDir)
  .then(() => console.log('All Pug templates compiled to JS functions!'))
  .catch(err => console.error('Error during compilation:', err));