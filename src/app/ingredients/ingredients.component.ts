import {Component, Input} from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @Input() ingredients!: Ingredient[];

  addCount(index: number) {
    this.ingredients[index].amount++;
  }

  reduceAmount(index: number) {
    if (this.ingredients[index].amount != 0) {
      this.ingredients[index].amount--;
    }
  }
}
