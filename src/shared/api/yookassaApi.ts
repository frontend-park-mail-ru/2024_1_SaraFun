import * as dotenv from 'dotenv';

dotenv.config();

const shopId = process.env.YOOKASSA_SHOP_ID;
const secretKey = process.env.YOOKASSA_SECRET_KEY;


const YOOKASSA_API_URL = 'https://api.yookassa.ru/v3/payments';

export async function createPayment(amount: number, description: string) {
    const paymentData = {
        amount: {
            value: amount, 
            currency: 'RUB', // Укажите нужную валюту
        },
        confirmation: {
            type: 'redirect', // Тип подтверждения
            return_url: 'https://spark-it.site', // URL для перенаправления после успешного платежа
        },
        capture: true,
        description: description,
    };

    const response = await fetch(YOOKASSA_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${shopId}:${secretKey}`)}`, // Базовая авторизация
        },
        body: JSON.stringify(paymentData),
    });

    if (!response.ok) {
        throw new Error(`Ошибка создания платежа: ${response.statusText}`);
    }

    const payment = await response.json();
    return payment;
}