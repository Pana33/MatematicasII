import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageRoutes } from '../../shared/enums/page-routes';
import { ModalPersonInfoComponent } from "./modal-person-info/modal-person-info.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ModalPersonInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly pageRoutes = PageRoutes
}
