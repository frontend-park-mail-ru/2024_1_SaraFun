import template from './shop.pug';
import { getProducts } from '../api/getProducts';
import { Router } from '../../../app/Router';
import { Product } from '../lib/product';
import { notificationManager } from '../../../widgets/Notification/notification';
import YooKassa from 'yookassa-ts/lib/yookassa'
import { CurrencyEnum } from 'yookassa-ts/lib/types/Common';
import { ConfirmationTypesEnum } from 'yookassa-ts/lib/types/Payment';

const yookassa = new YooKassa({
  shopId: '<Идентификатор магазина>',
  secretKey: '<Секретный ключ>'
});

export class ShopPage {
  private parent: Router;
  private products: Product[] = [];

  constructor(parent: Router) {
    this.parent = parent;
    this.loadProducts().then(() => {
      this.render();
    });
  }

  private async loadProducts(): Promise<void> {
    try {
      const productData = await getProducts();
      if (productData) {
        this.products = productData;
      } else {
        throw new Error('No products found');
      }
    } catch (error) {
      console.error('Error loading products:', error);
      notificationManager.addNotification('Ошибка загрузки товаров', 'fail');
    }
  }

  public render(): void {
    this.parent.root.innerHTML = template({
      products: this.products,
    });

    this.componentWillMount();
  }

  private componentWillMount() {
    const buyBoostButtons = document.querySelectorAll('.buy-button') as NodeListOf<HTMLElement>;
    
    buyBoostButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const productId = (event.target as HTMLElement).dataset.productId;
        if (productId) {
          this.buyBoost(productId);
        }
        
      });
    });
  }

  private async buyBoost(productId: string): Promise<void> {
    const product = this.products.find(p => p.id === productId);
    if (product) {
        try {
            const payment = await yookassa.createPayment({
                amount: {
                    value: '100.00',
                    currency: CurrencyEnum.RUB,
                },
                confirmation: {
                    type: ConfirmationTypesEnum.redirect,
                    return_url: toBase64('https://spark-it.site/shop'), 
                    confirmation_url: toBase64('https://spark-it.site/shop'), 
                },
                capture: true,
                description: toBase64(`Заказ №${product.id}`), 
            });

            notificationManager.addNotification(`Товар ${product.name} успешно куплен`, 'success');
        } catch (error) {
            console.error('Ошибка при создании платежа:', error);
            notificationManager.addNotification('Ошибка при обработке платежа', 'fail');
        }
    }
}
}

function toBase64(str: string): string {
  const utf8Bytes = new TextEncoder().encode(str);
  let binaryString = '';
  for (let i = 0; i < utf8Bytes.length; i++) {
      binaryString += String.fromCharCode(utf8Bytes[i]);
  }
  return btoa(binaryString);
}