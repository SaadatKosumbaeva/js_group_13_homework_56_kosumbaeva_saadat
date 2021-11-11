import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ingredient} from "../shared/ingredient.module";

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css']
})
export class IngredientItemComponent {
  @Input() ingredient!: Ingredient;
  @Output() amountAdd = new EventEmitter();
  @Output() amountReduce = new EventEmitter();
  disabled = true;

  buttonDisable() {
    if (this.ingredient.amount > 0) {
      this.disabled = false;
    } else if (this.ingredient.amount === 0) {
      this.disabled = true;
    }
    return this.disabled;
  }

  onAddCount() {
    this.amountAdd.emit();
  }

  onReduceAmount() {
    this.amountReduce.emit();
  }
}
