import { Injectable } from '@angular/core';
import { Cart, CartItem, Colors, ProductCard } from '../models/interfaces';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cart = new BehaviorSubject<Cart>({ items: [] });

  url = 'http://localhost:3000/products';

  constructor() { }

  async getAllProduct(): Promise<ProductCard[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getProductById(id: number): Promise<ProductCard | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  addToCard(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items })
    console.log(items)
  }
  getTotal(items: Array<CartItem>): number {
    return items.reduce((total, item) => total + (item.quantity !== undefined && item.price ? item.price * item.quantity : 0), 0);
  }
  clearCart(): void {
    this.cart.next({ items: [] });
  }
}
