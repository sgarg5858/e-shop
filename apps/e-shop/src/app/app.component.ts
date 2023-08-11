import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AsyncPipe } from '@angular/common';
import {  getCategories, selectCategories  } from '@nx-shop/category';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [RouterModule,MainNavComponent,AsyncPipe],
  selector: 'nx-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'e-shop';
  store = inject(Store);
  categories$:Observable<string[]>|undefined = this.store.select(selectCategories);

  ngOnInit(): void {
    this.store.dispatch(getCategories());
  }
}
