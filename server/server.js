const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const session = require("express-session");
const http = require('http')


const hostname = '0.0.0.0'
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'GET') {
    res.end('Это GET-запрос\n');
  } else if (req.method === 'POST') {
    res.end('Это POST-запрос\n');
  } else {
    res.statusCode = 405; // Метод не разрешен
    res.end('Метод не поддерживается\n');
  }
});
server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});

app.use(cors({
  origin: 'http://5.188.140.7:3001', // Замените на ваш фронтенд URL
  credentials: true
}));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Установите true, если используете HTTPS
}));

app.set('view engine', 'pug');
app.use(express.static(path.resolve(__dirname, "../src")));

app.use(express.urlencoded({ extended: true }));


app.post('/register', (req, res) => {
  const { login, password } = req.body;
  if (login && password) {
    res.status(200).send('Регистрация успешна');
  } else {
    res.status(400).send('Ошибка регистрации');
  }
});

app.get('/feed', (req, res) => {
  if (req.session.user) {
      // Пример списка пользователей
      const users = [
          { login: 'user1', info: 'Информация о пользователе 1' },
          { login: 'user2', info: 'Информация о пользователе 2' },
          { login: 'user3', info: 'Информация о пользователе 3' }
      ];
      res.status(200).json(users);
  } else {
      res.status(401).json({ message: 'Необходима авторизация' });
  }
});

app.post('/login', (req, res) => {
  const { login, password } = req.body;
  if (login && password) {
    res.status(200).send('Авторизация успешна');
  } else {
    res.status(400).send('Ошибка авторизации');
  }
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../src", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});