import { Payment, PaymentData } from 'yookassa'; 
import config from '../../yookassa.config'; 

const payment = new Payment({
    shopId: config.shopId,
    secretKey: config.secretKey,
});

export async function createPayment(amount: number, description: string): Promise<void> {
    try {
        const paymentData: PaymentData = {
            amount: {
                value: amount,
                currency: 'RUB',
            },
            confirmation: {
                type: 'redirect',
                return_url: 'https://spark-it.site/shop',
            },
            description: description,
        };

        const paymentResponse = await payment.create(paymentData);
        console.log('Payment created:', paymentResponse.confirmation.confirmation_url);
    } catch (error) {
        console.error('Error creating payment:', error);
    }
}