declare module 'yookassa' {
    export interface Payment {
        id: string;
        amount: {
            value: string;
            currency: string;
        };
        status: string;
        payment_method: {
            type: string;
            saved: boolean;
            card?: {
                last4: string;
                expiry_month: number;
                expiry_year: number;
                card_type: string;
                issuer: string;
                country: string;
            };
        };
        created_at: string;
        confirmation: {
            type: string;
            confirmation_url?: string;
            return_url?: string;
        };
    }

    export interface PaymentData {
        // Определите поля для PaymentData
    }

    export interface CreatePaymentRequest {
        amount: {
            value: string;
            currency: string;
        };
        capture: boolean;
        confirmation: {
            type: string;
            return_url?: string;
        };
        description?: string;
        metadata?: Record<string, any>;
    }

    export interface CreatePaymentResponse {
        id: string;
        status: string;
        confirmation: {
            type: string;
            confirmation_url?: string;
            return_url?: string;
        };
    }

    export class Yookassa {
        constructor(shopId: string, secretKey: string);

        createPayment(request: CreatePaymentRequest): Promise<CreatePaymentResponse>;
        getPayment(paymentId: string): Promise<Payment>;
    }
}