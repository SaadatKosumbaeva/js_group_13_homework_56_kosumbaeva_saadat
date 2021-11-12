import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientItemComponent } from './ingredient-item/ingredient-item.component';
import { BurgerComponent } from './burger/burger.component';
import { BurgerBlockComponent } from './burger-block/burger-block.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    IngredientItemComponent,
    BurgerComponent,
    BurgerBlockComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
