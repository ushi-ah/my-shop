import { Component, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartItem, ProductCard } from '../../models/interfaces';
import { ProductService } from '../../services/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    MatIconModule,
    CurrencyPipe,
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  productCard: ProductCard | undefined;
  productService = inject(ProductService)


  constructor() {
    const productId = parseInt(this.route.snapshot.params['id']);
    this.productService.getProductById(productId).then(productCard => {
      this.productCard = productCard;
    });
  }
  ngOnInit(): void {

  }
  AddToCart(): void {
    this.productService.addToCard({
      id: this.productCard?.id,
      description: this.productCard?.description,
      price: this.productCard?.price,
      image: this.productCard?.image,
      style: this.productCard?.style,
      color: this.productCard?.color,
      quantity: 1,
    })

  }
}
