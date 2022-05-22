import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaTypesComponent } from './Pizzas/PizzaTypes/PizzaTypes.component';
import { PizzaListComponent } from './Pizzas/pizza-list/pizza-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [	
    AppComponent,
    PizzaTypesComponent,
    PizzaListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
