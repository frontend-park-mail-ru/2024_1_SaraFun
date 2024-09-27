import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../src')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src', 'index.html'));
});

app.get('/pug-route', (req, res) => {
  res.render('index', { title: 'My Web Page', message: 'Welcome to my website!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

