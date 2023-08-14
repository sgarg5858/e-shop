import { Component, Input, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ProductsForCategoryActions } from '../store/product.actions';
import { products } from '../store/product.selector';

@Component({
  selector: 'nx-shop-product',
  standalone: true,
  imports: [CommonModule,AsyncPipe],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[]
})
export class ProductComponent {

   store = inject(Store);

  _categoryName:string|null=null;

  products$ = this.store.select(products);

  @Input() set categoryName(categoryName:string|null)
  {
    this._categoryName=categoryName;
    this.loadProducts(this._categoryName);
  }

  loadProducts(categoryName:string|null)
  {
    if(categoryName)
    this.store.dispatch(ProductsForCategoryActions.loadProducts({categoryName}))
  }
}
