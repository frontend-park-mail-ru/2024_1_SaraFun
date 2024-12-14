import template from './shop.pug';
import { getProducts } from '../api/getProducts';
import { Router } from '../../../app/Router';
import { Product } from '../lib/product';
import { notificationManager } from '../../../widgets/Notification/notification';
import { createPayment } from '../../../shared/api/yookassaApi'; 

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
        this.buyBoost(productId);
      });
    });
  }

  private async buyBoost(productId: string): Promise<void> {
    const product = this.products.find(p => p.id === productId);
    if (product) {
        try {
            const amount = product.price; 
            const description = `Оплата за товар: ${product.name}`; 

            const payment = await createPayment(amount, description);

            if (payment.confirmation && payment.confirmation.confirmation_url) {
                window.location.href = payment.confirmation.confirmation_url;
            } else {
                notificationManager.addNotification('Не удалось получить URL подтверждения', 'fail');
            }
        } catch (error) {
            console.error('Ошибка при создании платежа:', error);
            notificationManager.addNotification('Ошибка при обработке платежа', 'fail');
        }
    }
}
}