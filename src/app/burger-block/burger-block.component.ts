import {Component, Input} from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";
import {IngredientsDisplay} from "../shared/ingredient-display.module";

@Component({
  selector: 'app-burger-block',
  templateUrl: './burger-block.component.html',
  styleUrls: ['./burger-block.component.css']
})
export class BurgerBlockComponent {
  @Input() ingredients!: Ingredient[];
  @Input() ingDis!: IngredientsDisplay;

}

