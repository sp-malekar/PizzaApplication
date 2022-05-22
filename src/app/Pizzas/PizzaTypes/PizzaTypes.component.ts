import { Component } from "@angular/core";

@Component(
  {
    selector:'app-PizzaTypes',
    templateUrl: `PizzaTypes.components.html`,
    styleUrls : [`PizzaTypes.components.css`]
  }
)
export class PizzaTypesComponent{
  Pizza : any = {
    "Id" : 1,
    "Name": "Margarita",
    "Type" : "Pizza",
    "Price": 120
  }

}
