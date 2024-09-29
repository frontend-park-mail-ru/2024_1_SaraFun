const express = require("express");
const path = require("path");

const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.resolve(__dirname, "../src")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../src", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});