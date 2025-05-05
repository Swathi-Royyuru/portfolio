import { Injectable } from '@angular/core';

export interface CartItem {
  restaurantId: number;
  restaurantName: string;
  item: any;
  quantity: number;
  totalPrice: number;
  paymentMethod: string;
}

// cart.service.ts
@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    getCartItems(): CartItem[] {
      const cart = localStorage.getItem('cart');
      return cart ? [JSON.parse(cart)] : [];
    }
  
    clearCart(): void {
      localStorage.removeItem('cart');
    }
  
    getTotal(): number {
      const items = this.getCartItems();
      return items.reduce((sum, item) => sum + item.totalPrice, 0);
    }
  
    updatePaymentMethod(method: string): void {
      const items = this.getCartItems();
      if (items.length > 0) {
        items[0].paymentMethod = method;
        localStorage.setItem('cart', JSON.stringify(items[0]));
      }
    }
  } 