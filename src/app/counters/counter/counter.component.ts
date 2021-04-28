import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: 'counter.component.html'
}) 
export class CounterComponent {
    titulo: string = 'Contador App';
    counter: number = 0;
    base: number = 5;

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