import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operations',
  standalone: true,
  imports: [],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss'
})
export class OperationsComponent {
  @Input() stepToSeeOperation:number = 0
}
