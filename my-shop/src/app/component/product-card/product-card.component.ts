import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductCard } from '../../models/interfaces';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    MatIconModule,
    CurrencyPipe,

  ],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() productCard!: ProductCard;
}
