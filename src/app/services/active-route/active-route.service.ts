import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveRouteService {
  private activeRoute:BehaviorSubject<number> = new BehaviorSubject(0)
  routeToActive = this.activeRoute.asObservable()

  changeRoute(unitToActive:number){
    this.activeRoute.next(unitToActive)
  }

}
