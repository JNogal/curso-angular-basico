import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  lastRemovedHero: string = '';
  isRemovedHero: boolean = false;

  removeHeroFromBot() {
    console.log('Borrando héroe por el final...');
    this.lastRemovedHero = this.heroes.pop() || '';
  }

  removeHeroFromTop() {
    console.log('Borrando héroe por el principio...');
    this.lastRemovedHero = this.heroes.shift() || '';
  }

  removeWholeList() {
    console.log('Borrando toda la lista de héroes...');
    this.heroes = [];
    this.lastRemovedHero = '';
  }
}
