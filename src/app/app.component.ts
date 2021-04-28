import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  titulo : string = 'Contador App';
  counter: number = 0;
  base   : number = 5;

  add() {
    this.counter += 1;
  }

  remove() {
    this.counter -= 1;
  }

  accumulate(value: number) {
    this.counter += value;
  }
}
