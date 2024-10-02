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

    if (!response.ok) {
      return res.redirect('/login');
    }
    
    return next(); // Пользователь авторизован, продолжаем выполнение
  
  } catch (error) {
    console.error(error);
    return res.redirect('/login');
  }
};


app.post('/feed', checkAuth, async (req, res) => {
  res.status(200).send('Пользователь авторизован'); 
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
