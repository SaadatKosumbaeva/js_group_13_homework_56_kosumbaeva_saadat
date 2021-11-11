import {Component} from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Meat', 0, 50),
    new Ingredient('Cheese', 0, 20),
    new Ingredient('Salad', 0, 5),
    new Ingredient('Bacon', 0, 30),
  ]

  addCount(index: number) {
    this.ingredients[index].amount++;
  }

  reduceAmount(index: number) {
    if (this.ingredients[index].amount != 0) {
      this.ingredients[index].amount--;
    }
  }
}
