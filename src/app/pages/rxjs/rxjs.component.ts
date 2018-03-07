import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    this.regresaObservable()
    .subscribe(
      numero => console.log('subs', numero),
      error => console.log('Error en el observable', error),
      () => console.log('El observador termino!')
    );
  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {
    return new Observable(
      observer => {
        let contador = 0;
        const intervalo = setInterval(() => {
          contador += 1;

          const salida = {
            valor: contador
          };

          observer.next( salida );
          if (contador === 3) {
            clearInterval(intervalo);
            observer.complete();
          }

          // if (contador === 2) {
          //   clearInterval(intervalo);
          //   observer.error('Auxiliioooo');
          // }
        }, 500);
    })
    .retry(2)
    .map( (resp: any) => resp.valor)
    .filter( (valor, index) => {
      if (valor % 2 === 1) {
        // impar
        return true;
      } else {
        // par
        return false;
      }
    });
  }

}
