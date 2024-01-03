import { Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component'
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CartComponent } from './component/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'productDetails/:id',
        component: ProductDetailsComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    }
];
