import template from './shop.pug';
import { getProducts } from '../api/getProducts';
import { Router } from '../../../app/Router';
import { Product } from '../lib/product';
import { notificationManager } from '../../../widgets/Notification/notification';
import { Payment, PaymentData } from 'yookassa';
import { createPayment } from '../../../features/payment';


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
    const addToCartButtons = document.querySelectorAll('.buy-button') as NodeListOf<HTMLElement>;
    
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const productId = (event.target as HTMLElement).dataset.productId;
        this.buyBoost(productId);
      });
    });
  }

  private buyBoost(productId: string): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
          notificationManager.addNotification(`Товар ${product.name} куплен!`, 'success');
    }
  }
}