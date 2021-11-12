import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";
import {IngredientsDisplay} from "../shared/ingredient-display.module";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  @Input() ingredients!: Ingredient[];
  @Output() ingDis = new EventEmitter();
  imageUrls = ['https://png.pngtree.com/png-vector/20190124/ourlarge/pngtree-elbow-food-ingredients-cartoon-png-image_551086.jpg', 'https://www.pngitem.com/pimgs/m/284-2845773_cheese-vector-melted-transparent-background-cheese-cartoon-png.png', 'https://cdn5.vectorstock.com/i/thumb-large/68/89/green-lettuce-salad-in-bright-color-cartoon-flat-vector-32656889.jpg', 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-delicious-cartoon-bacon-meat-image_1233931.jpg'];
  ingredientsDisplay = new IngredientsDisplay;

  addCount(index: number) {
    this.ingredients[index].amount++;
    this.ingredientsDisplay.array[index].display = true;
    this.ingredientsDisplay.array[index].amount = this.ingredients[index].amount;
    this.ingDis.emit(this.ingredientsDisplay);
  }

  reduceAmount(index: number) {
    if (this.ingredients[index].amount != 0) {
      if (this.ingredients[index].amount === 1) {
        this.ingredientsDisplay.array[index].display = false;
      }
      this.ingredients[index].amount--;
      this.ingredientsDisplay.array[index].amount = this.ingredients[index].amount;
    }
  }
}
