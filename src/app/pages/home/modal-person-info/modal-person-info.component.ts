import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PersonInfoService } from '../../../services/person-info/person-info.service';
import { Subscription } from 'rxjs';
import { PersonInfo } from '../../../shared/interfaces/person-info';

@Component({
  selector: 'app-modal-person-info',
  standalone: true,
  imports: [],
  templateUrl: './modal-person-info.component.html',
  styleUrl: './modal-person-info.component.scss'
})
export class ModalPersonInfoComponent implements OnInit, OnDestroy {
  private personService = inject(PersonInfoService)
  person$!:Subscription
  person!:PersonInfo

  ngOnInit(): void {
    this.person$ = this.personService.personToShow.subscribe(personFinded => this.person = personFinded)
  }

  ngOnDestroy(): void {
    this.person$?.unsubscribe()
  }

}
