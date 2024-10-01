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

const checkAuth = async (req, res, next) => {
  try {
    
    const response = await fetch('http://5.188.140.7:8080/checkauth', {
      method: 'GET',
      credentials: 'include',
      headers: {
      }
    });
    
    return next(); // Пользователь авторизован, продолжаем выполнение
  
  } catch (error) {
    console.error(error);
    return res.redirect('/login');
  }
};

const fetchFeed = async () => {
  const response = await fetch('http://5.188.140.7:80/feed'); // URL для получения ленты
  if (!response.ok) {
    throw new Error('Ошибка при получении ленты');
  }
  return await response.json(); // Возвращаем данные ленты
};

app.get('/feed', checkAuth, async (req, res) => {
  try {
    const feedData = await fetchFeed(); // Получаем данные ленты
    res.status(200).json(feedData); // Возвращаем данные в формате JSON
  } catch (error) {
    console.error('Ошибка при получении ленты:', error);
    res.status(500).json({ error: 'Ошибка при получении ленты' });
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
