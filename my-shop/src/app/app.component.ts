import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './component/header/header.component';
import { Cart } from './models/interfaces';
import { ProductService } from './services/product.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  cart: Cart = { items: [] };
  productService = inject(ProductService);

  
  ngOnInit(): void {
    this.productService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
