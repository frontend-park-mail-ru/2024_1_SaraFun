import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../src/pages/main/ui')); 


app.use(express.static(path.join(__dirname, '../src')));

app.get('/main', (req, res) => {
  res.render('index', { title: 'Main Page', message: 'Welcome to the Main Page!' });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});