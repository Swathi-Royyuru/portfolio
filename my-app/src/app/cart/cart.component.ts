import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../cart/cart.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;
  paymentMethod: string = 'pay_on_pickup'; // Initialize the property

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
    
    // Set the payment method from cart items if available
    if (this.cartItems.length > 0) {
      this.paymentMethod = this.cartItems[0].paymentMethod || 'pay_on_pickup';
    }
  }

  updateCart(): void {
    if (this.cartItems.length > 0) {
      this.cartItems[0].paymentMethod = this.paymentMethod;
      localStorage.setItem('cart', JSON.stringify(this.cartItems[0]));
    }
  }

  placeOrder(): void {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // Here you would typically send the order to your backend
    alert(`Order placed successfully!\nYou will pay on pickup at ${this.cartItems[0].restaurantName}`);
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  removeItem(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0;
  }
}