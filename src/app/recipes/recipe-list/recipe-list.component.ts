import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  Recipes : Recipe[];

  /* old code to pass data from component to another now i use services
  @Output() recipeSelected = new EventEmitter<Recipe>();
*/
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.Recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeService.selectedRecipe.emit(recipe);
    /*
    old code to pass data from component to another now i use services
    this.recipeSelected.emit(recipe);*/
  }

}
