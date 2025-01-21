import { Component, inject } from '@angular/core';
import { PersonInfoService } from '../../services/person-info/person-info.service';

@Component({
  selector: 'app-approximate-area-under-the-curve',
  standalone: true,
  imports: [],
  templateUrl: './approximate-area-under-the-curve.component.html',
  styleUrl: './approximate-area-under-the-curve.component.scss'
})
export class ApproximateAreaUnderTheCurveComponent {
  private personService = inject(PersonInfoService)
  emitPerson(idToFind:string){
    this.personService.emitPerson(idToFind)
  }
}
