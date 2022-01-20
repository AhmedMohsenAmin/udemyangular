import { Component, OnInit } from '@angular/core';
import {Ingrdiant} from '../shared/Ingrediant.model'
import {ShoppingListService} from "./shopping-list.service";



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[]
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingrdiant[] ;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngeridiants();
    this.shoppingListService.ingerdiantsChanged.subscribe(
      (ingredients:Ingrdiant[]) =>{
        this.ingredients = ingredients;
      }
    )
  }

  onEditingItem(index : number){
    this.shoppingListService.startEditing.next(index);
  }

}
