import { Component, Input, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadingProducts, allProducts } from '../store/product.selector';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductActions } from '../store/product.actions';

@Component({
  selector: 'nx-shop-product',
  standalone: true,
  imports: [CommonModule,AsyncPipe,MatCardModule,MatButtonModule,MatProgressSpinnerModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[]
})
export class ProductComponent{

   store = inject(Store);

  _categoryName:string|null=null;

  loadingProducts$ = this.store.select(loadingProducts);

  products$ = this.store.select(allProducts);

  @Input() set categoryName(categoryName:string|null)
  {
    this._categoryName=categoryName;
    if(this._categoryName)
    this.store.dispatch(ProductActions.loadProductsByCategory({categoryName:this._categoryName}));
    else
    this.store.dispatch(ProductActions.loadAllProducts());
  }

}
