import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule,MainNavComponent,CommonModule],
  selector: 'nx-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-shop';
}
