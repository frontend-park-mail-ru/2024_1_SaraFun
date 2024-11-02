import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'express-session';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config(); 

const app = express();

app.use(cors({
  origin: 'http://localhost:80', 
  credentials: true
}));

if (!process.env.SECRET_KEY) {
  throw new Error('SECRET_KEY is not defined in .env file');
}


app.use(session({
  secret: process.env.SECRET_KEY,  
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

app.use(express.static(path.resolve(__dirname, '../src')));
app.use(express.urlencoded({ extended: true }));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src', 'index.html'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});