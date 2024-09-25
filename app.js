const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index', { title: 'My Web Page', message: 'Welcome to my website!' });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
