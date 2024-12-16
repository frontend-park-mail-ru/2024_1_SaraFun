import template from './shop.pug';
import topupTemplate from './topup.pug'; // Импортируйте шаблон пополнения
import { getProducts } from '../api/getProducts';
import { Router } from '../../../app/Router';
import { Product } from '../lib/product';
import { notificationManager } from '../../../widgets/Notification/notification';
import { post } from '../../../shared/api/api';
import { buyBoostApi } from '../api/buyBoost';
import { topupApi } from '../api/topup';

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
        const productName = (event.target as HTMLElement).dataset.productName || '';
        const productPrice = parseFloat((event.target as HTMLElement).dataset.productPrice || '0');
        
        if (productName && productPrice) {
          this.buyBoost(productName, productPrice);
        }
      });
    });

    // Обработка пополнения счета
    const topupButton = document.querySelector('.topup-button') as HTMLElement;
    topupButton.addEventListener('click', () => {
      this.openTopupModal();
    });

    // Закрытие модального окна при нажатии на крестик
    const closeButton = document.querySelector('.modal .close') as HTMLElement;
    closeButton.addEventListener('click', () => {
      this.closeTopupModal();
    });

    const topupConfirmButton = document.querySelector('#topupModal button') as HTMLElement;
    topupConfirmButton.addEventListener('click', () => {
      const amountInput = document.getElementById('topupAmount') as HTMLInputElement;
      const amount = parseFloat(amountInput.value);
      if (amount > 0) {
        this.topup(amount);
        amountInput.value = ''; 
      } else {
        notificationManager.addNotification('Введите корректную сумму', 'fail');
      }
    });
  }

  private openTopupModal(): void {
    const modal = document.getElementById('topupModal') as HTMLElement;
    modal.style.display = 'block';
  }

  private closeTopupModal(): void {
    const modal = document.getElementById('topupModal') as HTMLElement;
    modal.style.display = 'none';
  }

  private async buyBoost(productName: string, productPrice: number): Promise<void> {
    const response = await buyBoostApi(productName, productPrice);

    if (response) {
      notificationManager.addNotification('Покупка успешно выполнена', 'success');
    } else {
      notificationManager.addNotification('Ошибка при обработке платежа', 'fail');
    }
  }

  private async topup(amount: number): Promise<void> {
    const response = await topupApi(amount);
    
    if (response) {
      this.closeTopupModal(); 
    } else {
      notificationManager.addNotification('Ошибка при обработке платежа', 'fail');
    }
  }
}