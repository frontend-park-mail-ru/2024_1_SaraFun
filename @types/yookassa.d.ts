declare module 'yookassa' {
    export interface Amount {
        value: number; 
        currency: string;
    }

    export interface Confirmation {
        type: string;
        return_url: string;
    }

    export interface PaymentData {
        amount: Amount;
        confirmation: Confirmation;
        description: string;
    }

    export class Payment {
        constructor(options: { shopId: string; secretKey: string });
        create(paymentData: PaymentData): Promise<any>; 
    }
}