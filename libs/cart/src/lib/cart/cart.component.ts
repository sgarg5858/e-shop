import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CartActions } from '../store/cart.action';
import { cart } from '../store/cart.selector';

@Component({
  selector: 'nx-shop-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent  implements OnInit{

  store = inject(Store);
  carts$=this.store.select(cart)

  ngOnInit(): void {
      this.store.dispatch(CartActions.loadCart());
  }

}
