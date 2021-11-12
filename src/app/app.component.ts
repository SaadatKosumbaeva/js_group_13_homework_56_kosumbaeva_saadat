import {Component} from '@angular/core';
import {Ingredient} from "./shared/ingredient.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Meat', 0, 50),
    new Ingredient('Cheese', 0, 20),
    new Ingredient('Salad', 0, 5),
    new Ingredient('Bacon', 0, 30),
  ];
}
