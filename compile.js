import { compileFile } from 'pug';
import { readdir, writeFile } from 'node:fs/promises';

const PATHS = ['./src/js/views/', './src/components/LoginForm/', './src/components/ImageSection/', './src/components/RegistrationForm/', './src/components/SwipeCard/', './src/pages/login/', './src/pages/signup/', './src/pages/feed/'];
  
const PATH_OUT = './src/Compile/';

for (const path of PATHS) {
    console.log("in for");
  readdir(path)
    .then(async (res) => {
      for (const fileName of res) {
        console.log("in for");
        console.log(fileName);
        if (fileName.split('.')[1] === 'pug') {
            console.log("in if");
          const name = fileName.replace('.pug', '');

          const templateFunction = compileFile(path + fileName);

          writeFile(PATH_OUT + name + '.js', 'export default ' + templateFunction);
        }
      }
    });
}
