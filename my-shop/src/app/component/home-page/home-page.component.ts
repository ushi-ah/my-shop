import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { Colors, ProductCard } from '../../models/interfaces';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatIconModule,
    ProductCardComponent,
    CommonModule,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  productCartList: ProductCard[] | undefined;
  productService = inject(ProductService)

  constructor() {
    this.productService.getAllProduct()
    .then((productCartList: ProductCard[]) => { this.productCartList = productCartList });
  }


}
