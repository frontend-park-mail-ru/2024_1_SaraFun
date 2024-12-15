import * as dotenv from 'dotenv';

dotenv.config();

const apiKey: string | undefined = process.env.YOOKASSA_API_KEY;
const shopId: string | undefined = process.env.SHOP_ID;

if (!apiKey) {
    throw new Error('API key is not defined in the environment variables.');
}

if (!shopId) {
    throw new Error('ShopId is not defined in the environment variables.');
}
else {
    console.log(shopId);
}

export { apiKey, shopId };
