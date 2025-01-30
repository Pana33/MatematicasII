import { Component } from '@angular/core';
import { PageRoutes } from '../../shared/enums/page-routes';

@Component({
  selector: 'app-definite-and-indefinite-integral',
  standalone: true,
  imports: [],
  templateUrl: './definite-and-indefinite-integral.component.html',
  styleUrl: './definite-and-indefinite-integral.component.scss'
})
export class DefiniteAndIndefiniteIntegralComponent {
  readonly pageRoutes = PageRoutes
}
