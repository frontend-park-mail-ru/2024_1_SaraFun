import template from './shop.pug';
import { getProducts } from '../api/getProducts';
import { Router } from '../../../app/Router';
import { Product } from '../lib/product';
import { notificationManager } from '../../../widgets/Notification/notification';
import { post } from '../../../shared/api/api';

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
        notificationManager.addNotification(`${this.products[0].imageURL}`, 'success');
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
        const productName = (event.target as HTMLElement).dataset.productName || '';
        const productPrice = parseFloat((event.target as HTMLElement).dataset.productPrice || '0');
        
        if (productName && productPrice) {
          this.buyBoost(productName, productPrice);
        }
      });
    });
  }

  private async buyBoost(productName: string, productPrice: number): Promise<void> {
    try {
      notificationManager.addNotification(`${productName} | ${productPrice}`, 'success');

      const body = {
        title: productName,
        price: productPrice.toFixed(2) 
      };

      const response = await post('/api/payments/topup', body);
      const redirectURL = await response.json();
      if (redirectURL.redirect_link) {
        window.location.href = redirectURL.redirect_link;
      }
    } catch (error) {
      console.error('Ошибка при создании платежа:', error);
      notificationManager.addNotification('Ошибка при обработке платежа', 'fail');
    }
  }
}