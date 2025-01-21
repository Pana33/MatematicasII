import { EventEmitter, Injectable } from '@angular/core';
import { PersonInfo } from '../../shared/interfaces/person-info';

@Injectable({
  providedIn: 'root'
})
export class PersonInfoService {
  personToShow:EventEmitter<PersonInfo> = new EventEmitter()

  emitPerson(idToFind:string){
    let person:PersonInfo = this.peopleData.find(personInData => personInData.id === idToFind)!
    this.personToShow.emit(person)
  }

  peopleData:PersonInfo[] = [
    {
      id:"Riemann",
      name:"Georg Friedrich Bernhard Riemann",
      born:"17 de septiembre de 1826",
      died:"20 de julio de 1866",
      city:"Breselenz, Hannover (ahora Alemania)",
      aboutHim:"Bernhard Riemann fue un destacado matemático nacido en 1826, hijo de un ministro luterano, Friedrich Bernhard Riemann. Desde joven, mostró un gran interés por\
        las matemáticas, a pesar de no ser un alumno sobresaliente en su escuela. Se trasladó a la Universidad de Göttingen y luego a Berlín, donde estudió bajo la influencia de\
        matemáticos como Dirichlet y Eisenstein. Su trabajo más importante incluyó la formulación de la teoría de variables complejas y las superficies de Riemann.\
        Riemann también desarrolló una teoría fundamental sobre la geometría, destacándose por su famosa conferencia de 1854, donde introdujo conceptos clave como el espacio\
        riemanniano y el tensor de curvatura, los cuales serían fundamentales para la teoría de la relatividad de Einstein. A lo largo de su carrera, Riemann contribuyó al\
        estudio de las funciones abelianas, la teoría de números y la función zeta de Riemann, cuyo análisis llevó a la famosa hipótesis que aún sigue siendo un problema abierto.\
        A pesar de sus logros, Riemann tuvo una salud frágil y murió de tuberculosis en 1866 a los 39 años, dejando un legado que ha influido profundamente en las matemáticas y\
        la física. Su obra fue inicialmente incomprendida, pero con el tiempo sus ideas fueron fundamentales para el desarrollo de nuevas ramas de las matemáticas y la física moderna.",
      reference:"https://paginas.matem.unam.mx/cprieto/biografias/biografias-de-matematicos/biografias-de-matematicos-p-t/riemann-bernhard"
    }
  ]

}
