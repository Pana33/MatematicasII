import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageRoutes } from '../../shared/enums/page-routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly pageRoutes = PageRoutes
}
