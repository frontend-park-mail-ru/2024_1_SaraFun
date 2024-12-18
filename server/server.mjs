import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get(/^(?!.*.(css|js|img|png|webp|webm|svg)).*$/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

const port = process.argv[2] || 3000;

app.listen(port, () => {
    console.info(`Сервер запущен на порту ${port}`);
});