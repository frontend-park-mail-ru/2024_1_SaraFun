import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем путь к текущему файлу и директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Установка папки для статических файлов
app.use(express.static(path.join(__dirname, '../src')));

// Обработка GET-запроса на корневой URL
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src', 'index.html')); // Отправка index.html
});

// Если вы хотите использовать EJS для других маршрутов, оставьте это
app.set('view engine', 'ejs');

// Пример маршрута с использованием EJS
app.get('/ejs-route', (req, res) => {
  res.render('index', { title: 'My Web Page', message: 'Welcome to my website!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});