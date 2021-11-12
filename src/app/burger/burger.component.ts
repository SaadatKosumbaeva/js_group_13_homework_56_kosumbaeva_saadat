import {Component, Input} from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";
import {IngredientsDisplay} from "../shared/ingredient-display.module";

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
  @Input() ingredients!: Ingredient[];
  @Input() ingDis!: IngredientsDisplay;

  meat: string[] = [];
  cheese: string[] = [];
  salad: string[] = [];
  bacon: string[] = [];

  meatArray() {
    for (let i = 0; i < this.ingDis.array[0].amount; i++) {
      if (this.meat.length < this.ingDis.array[0].amount) {
        this.meat.push('item');
      } else if (this.meat.length > this.ingDis.array[0].amount) {
        this.meat.splice(i, 1);
      }
    }
    return this.meat;
  }

  cheeseArray() {
    for (let i = 0; i < this.ingDis.array[1].amount; i++) {
      if (this.cheese.length < this.ingDis.array[1].amount) {
        this.cheese.push('item');
      } else if (this.cheese.length > this.ingDis.array[1].amount) {
        this.cheese.splice(i, 1);
      }
    }
    return this.cheese;
  }

  saladArray() {
    for (let i = 0; i < this.ingDis.array[2].amount; i++) {
      if (this.salad.length < this.ingDis.array[2].amount) {
        this.salad.push('item');
      } else if (this.salad.length > this.ingDis.array[2].amount) {
        this.salad.splice(i, 1);
      }
    }
    return this.salad;
  }

  baconArray() {
    for (let i = 0; i < this.ingDis.array[3].amount; i++) {
      if (this.bacon.length < this.ingDis.array[3].amount) {
        this.bacon.push('item');
      } else if (this.bacon.length > this.ingDis.array[3].amount) {
        this.bacon.splice(i, 1);
      }
    }
    return this.bacon;
  }

  classMeat() {
    if (this.ingDis.array[0].amount > 0) {
      return 'Meat';
    } else {
      return '';
    }
  }

  classCheese() {
    if (this.ingDis.array[1].amount > 0) {
      return 'Cheese';
    } else {
      return '';
    }
  }

  classSalad() {
    if (this.ingDis.array[2].amount > 0) {
      return 'Salad';
    } else {
      return '';
    }
  }

  classBacon() {
    if (this.ingDis.array[3].amount > 0) {
      return 'Bacon';
    } else {
      return '';
    }
  }
}
