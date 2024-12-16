import { post } from "../../../shared/api/api";

export const buyBoostApi = async (productName: string, productPrice: number): Promise<boolean> => {
    try {
        const body = {
            title: productName,
            price: productPrice.toFixed(2)
        };
        const response = await post('/api/payments/buy', body);
        return true;
    } catch (error) {
        console.error('Ошибка при создании платежа:', error);
        return false;
    }
}