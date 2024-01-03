import { Component, OnInit, inject } from '@angular/core';
import { Cart, CartItem, Colors, ProductCard } from '../../models/interfaces';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatListModule,

  ],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  productService = inject(ProductService);

  cart: Cart = { items: [] };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'description',
    'color',
    'model',
    'style',
    'price',
    'quantity',
    'total',
    'action'
  ]

  ngOnInit(): void {
    this.productService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
    this.dataSource = this.cart.items;
  }
  getTotal(items: Array<CartItem>): number {
    return this.productService.getTotal(items);
  }
  onClearCart(): void {
    this.productService.clearCart();
  }

}
