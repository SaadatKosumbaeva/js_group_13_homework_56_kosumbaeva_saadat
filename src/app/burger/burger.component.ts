import {Component, Input} from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
  @Input() ingredients!: Ingredient[];
}
