const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const session = require('express-session');

app.use(cors({
  origin: 'http://localhost:80', 
  credentials: true
}));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // true, если  HTTPS
}));

app.set('view engine', 'pug');
app.use(express.static(path.resolve(__dirname, '../src')));

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
  console.log(req.session);
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
    req.session.user = { login };
    res.status(200).send('Авторизация успешна');
  } else {
    res.status(400).send('Ошибка авторизации');
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src', 'index.html'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
