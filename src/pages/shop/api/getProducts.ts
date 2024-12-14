import { Product } from "../lib/product";
import { products } from "../examples/products"; 

export const getProducts = async (): Promise<Product[]> => {
    return products; 
};