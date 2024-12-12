import { Product } from "../lib/product";

export const getProducts = async (): Promise<Product[]> => {
    const products: Product[] = [
      {
        id: '1',
        name: 'Товар 1',
        description: 'Описание товара 1',
        price: 100,
        imageURL: './img/cart.svg', 
      },
      {
        id: '2',
        name: 'Товар 2',
        description: 'Описание товара 2',
        price: 200,
        imageURL: './img/cart.svg', 
      },
      {
        id: '3',
        name: 'Товар 3',
        description: 'Описание товара 3',
        price: 300,
        imageURL: './img/cart.svg', 
      },
      {
        id: '4',
        name: 'Товар 4',
        description: 'Описание товара 4',
        price: 400,
        imageURL: './img/cart.svg', 
      },
      {
        id: '5',
        name: 'Товар 5',
        description: 'Описание товара 5',
        price: 500,
        imageURL: './img/cart.svg', 
      },
    ];
  
    return products;
  };