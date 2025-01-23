import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PageRoutes } from '../../shared/enums/page-routes';
import { ModalPersonInfoComponent } from "./modal-person-info/modal-person-info.component";
import { Subscription } from 'rxjs';
import { ActiveRouteService } from '../../services/active-route/active-route.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ModalPersonInfoComponent, NgClass, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  activeRouteService = inject(ActiveRouteService)
  readonly pageRoutes = PageRoutes
  activeRoute$!:Subscription
  activeRoute:number = 0

  ngOnInit(): void {
    this.activeRoute$ = this.activeRouteService.routeToActive.subscribe(lastRoute => this.activeRoute = lastRoute)
  }

  ngOnDestroy(): void {
    this.activeRoute$?.unsubscribe()
  }

}
