import template from './shop.pug';
import { getProducts } from '../api/getProducts';
import { Router } from '../../../app/Router';
import { Product } from '../lib/product';
import { notificationManager } from '../../../widgets/Notification/notification';

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
    const productData = await getProducts();
    if (productData) {
      this.products = productData;
    }
  }

  public render(): void {
    this.parent.root.innerHTML = template({
      products: this.products,
    });

    this.componentWillMount();
  }

  private componentWillMount() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button') as NodeListOf<HTMLElement>;
    
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const productId = (event.target as HTMLElement).dataset.productId;
        this.addToCart(productId);
      });
    });
  }

  private addToCart(productId: string): void {
    // Реализация добавления товара в корзину
    notificationManager.addNotification(`Товар с ID ${productId} добавлен в корзину!`, 'success');
  }
}