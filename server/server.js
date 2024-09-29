const express = require("express");
const path = require("path");

const app = express();

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