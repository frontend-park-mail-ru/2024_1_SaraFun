import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.argv[2] || 3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json()); // Для обработки JSON-тел

// Прокси для запросов к YooKassa
app.post('/api/yookassa/payments', async (req, res) => {
	try {
		const response = await axios.post('https://api.yookassa.ru/v3/payments', req.body, {
			headers: {
				'Authorization': 'Bearer test_OAoflJGu_Lt1iG8Wik83Ab8izO0jP7dyPIBx6Wt_rL8',
				'Content-Type': 'application/json',
			},
		});
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(error.response ? error.response.status : 500).json({ error: error.message });
	}
});

app.get(/^(?!.*.(css|js|img|png|webp|webm|svg)).*$/, (req, res) => {
	res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
	console.info(`Сервер запущен на порту ${PORT}`);
});
