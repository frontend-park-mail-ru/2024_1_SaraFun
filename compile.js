import { compileFile } from 'pug';
import { readdir, writeFile } from 'node:fs/promises';

const PATHS = [
	'./src/shared/components/SwipeCard/', 
	'./src/pages/login/ui/', 
	'./src/pages/signup/ui/', 
	'./src/pages/feed/ui/'
];
  
const PATH_OUT = './src/templates/';

for (const path of PATHS) {
	readdir(path)
		.then(async (res) => {
			for (const fileName of res) {
				if (fileName.split('.')[1] === 'pug') {
					const name = fileName.replace('.pug', '');

					const templateFunction = compileFile(path + fileName);
					writeFile(PATH_OUT + name + '.js', 
						'export default ' + templateFunction);
				}
			}
		});
}
