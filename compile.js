const pug = require('pug');
const fs = require('fs');


const compiledFunction = pug.compileFile('index.pug');

const html = compiledFunction();

fs.writeFile('index.html', html, (error) => {
  if (error) {
    console.error('Ошибка записи файла:', error);
  }
  if (!error){
    console.log('Файл index.html успешно создан!');
  }
});